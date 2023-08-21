import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Container, Row } from "react-bootstrap";
import './Courses.css';

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
    <section className="courses" style={{ marginTop: 100 }}>
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
              {/* <Card className="h-100">
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
              </Card> */}
                 <section style={{backgroundColor: '#eee', maxWidth: 10000}}>
  <div className="container py-5">
    <div className="row justify-content-center mb-3">
      <div className="col-md-12 col-xl-10">
        <div className="card shadow-0 border rounded-3">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                <div className="bg-image hover-zoom ripple rounded ripple-surface">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp" className="w-100" />
                  <a href="#!">
                    <div className="hover-overlay">
                      <div className="mask" style={{backgroundColor: 'rgba(253, 253, 253, 0.15)'}} />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6">
                <h5>Quant trident shirts</h5>
                <div className="d-flex flex-row">
                  <div className="text-danger mb-1 me-2">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <span>310</span>
                </div>
                <div className="mt-1 mb-0 text-muted small">
                  <span>100% cotton</span>
                  <span className="text-primary"> • </span>
                  <span>Light weight</span>
                  <span className="text-primary"> • </span>
                  <span>Best finish<br /></span>
                </div>
                <div className="mb-2 text-muted small">
                  <span>Unique design</span>
                  <span className="text-primary"> • </span>
                  <span>For men</span>
                  <span className="text-primary"> • </span>
                  <span>Casual<br /></span>
                </div>
                <p className="text-truncate mb-4 mb-md-0">
                  There are many variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected humour, or
                  randomised words which don't look even slightly believable.
                </p>
              </div>
              <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                <div className="d-flex flex-row align-items-center mb-1">
                  <h4 className="mb-1 me-1">$13.99</h4>
                  <span className="text-danger"><s>$20.99</s></span>
                </div>
                <h6 className="text-success">Free shipping</h6>
                <div className="d-flex flex-column mt-4">
                  <button className="btn btn-primary btn-sm" type="button">Details</button>
                  <button className="btn btn-outline-primary btn-sm mt-2" type="button">
                    Add to wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>
</section>
              <section >
              <div>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
   
  <div className="container d-flex mt-4 p-4">
    <div className="card mb-3" style={{maxWidth: 540}}>
      <div className="row g-0">
        <div className="col-md-6">
          <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png" className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">
              Data Structures
            </h5>
            <p className="card-text">
              A data structure is a storage that is
              used to store and organize data.
            </p>
            <p className="card-text">
              <small className="text-muted">
                Last updated now
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


              </section>
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
