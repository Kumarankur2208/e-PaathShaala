import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Container, Row } from "react-bootstrap";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [userId, setUserId] = useState("");
  const [filters, setFilters] = useState({
    level: "",
    category: "",
    isFeatured: false,
    minPrice: "",
    maxPrice: "",
    minDuration: "",
    maxDuration: "",
  });

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/courses"
        ); // Adjust the API endpoint
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const applyFilters = () => {
    const filteredCourses = courses.filter((course) => {
      return (
        (!filters.level || course.level === filters.level) &&
        (!filters.category || course.category === filters.category) &&
        (!filters.isFeatured || course.isFeatured === filters.isFeatured) &&
        (!filters.minPrice || course.price >= filters.minPrice) &&
        (!filters.maxPrice || course.price <= filters.maxPrice) &&
        (!filters.minDuration || course.duration >= filters.minDuration) &&
        (!filters.maxDuration || course.duration <= filters.maxDuration)
      );
    });
    return filteredCourses;
  };

  const handleFilterChange = (event) => {
    const { name, value, type, checked } = event.target;

    const newValue = type === "checkbox" ? checked : value;

    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: newValue,
    }));
  };

  const handleBuyNow = async (courseId) => {
    try {
      // Make an API request to initiate the buying process
      const response = await axios.post(
        `http://localhost:8080/api/v1/courses/${courseId}/buy`,
        {
          userId: userId, // Current user's ID
        }
      );

      // Handle the response, e.g., show a success message
      console.log("Buy now successful:", response.data);
    } catch (error) {
      console.error("Error buying course:", error);
    }
  };

  return (
    <section className="courses" style={{ maxWidth: 10000, marginTop: 100 }}>
      <Container>
        <h1>Course List</h1>
        <div className="filters">
          <label>
            Level:
            <select
              name="level"
              value={filters.level}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </label>
          <label>
            Category:
            <input
              type="text"
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
              placeholder="Enter category"
            />
          </label>
          <label>
            Featured:
            <input
              type="checkbox"
              name="isFeatured"
              checked={filters.isFeatured}
              onChange={handleFilterChange}
            />
          </label>
          <label>
            Min Price:
            <input
              type="number"
              name="minPrice"
              value={filters.minPrice}
              onChange={handleFilterChange}
            />
          </label>
          <label>
            Max Price:
            <input
              type="number"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleFilterChange}
            />
          </label>
          <label>
            Min Duration:
            <input
              type="number"
              name="minDuration"
              value={filters.minDuration}
              onChange={handleFilterChange}
            />
          </label>
          <label>
            Max Duration:
            <input
              type="number"
              name="maxDuration"
              value={filters.maxDuration}
              onChange={handleFilterChange}
            />
          </label>
        </div>
        <Row xs={1} md={3} className="g-4">
          {applyFilters().map((course) => (
            <Col key={course.id}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{course.courseName}</Card.Title>
                  <Card.Text>{course.courseDescription}</Card.Text>
                  <Card.Text>Price: {course.price}</Card.Text>
                  <Card.Text>Duration: {course.duration}</Card.Text>
                  <Card.Text>Level: {course.level}</Card.Text>
                  <Card.Text>Category: {course.category}</Card.Text>
                  <Card.Text>
                    Featured: {course.isFeatured ? "Yes" : "No"}
                  </Card.Text>
                  <button
                    onClick={() => handleBuyNow(course.id)}
                    className="btn1"
                  >
                    Buy Now
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Courses;
