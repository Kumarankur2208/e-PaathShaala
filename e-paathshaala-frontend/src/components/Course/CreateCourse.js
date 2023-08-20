import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CreateCourse.css"; 

const CreateCourse = () => {
  const [courseData, setCourseData] = useState({
    courseName: "",
    courseDescription: "",
    facultyId: "", // Assuming you have a logged-in faculty user
    price: "",
    duration: "",
    level: "",
    category: "",
    isFeatured: false,
    // Add other fields here
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!courseData.courseName) {
      newErrors.courseName = "Course name is required";
    }

    if (!courseData.courseDescription) {
      newErrors.courseDescription = "Course description is required";
    }

    // Add validation for other fields here

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/create-course", // Adjust endpoint
        courseData
      );
      console.log("Course creation response:", response.data);
      toast.success("Course created successfully!");
    } catch (error) {
      toast.error("Course creation failed. Please check your input data.");
    }
  };

  return (
    <section style={{ maxWidth: 1000, marginTop: 100 }}>
      <div className="create-course-container">
        <h2>Create a New Course</h2>
        <form className="create-course-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Course Name</label>
            <input
              type="text"
              name="courseName"
              value={courseData.courseName}
              onChange={handleInputChange}
              className={errors.courseName ? "error" : ""}
            />
            {errors.courseName && (
              <span className="error-text">{errors.courseName}</span>
            )}
          </div>
          <div className="form-group">
            <label>Course Description</label>
            <textarea
              name="courseDescription"
              value={courseData.courseDescription}
              onChange={handleInputChange}
              className={errors.courseDescription ? "error" : ""}
            />
            {errors.courseDescription && (
              <span className="error-text">{errors.courseDescription}</span>
            )}
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              name="price"
              value={courseData.price}
              onChange={handleInputChange}
              className={errors.price ? "error" : ""}
            />
            {errors.price && <span className="error-text">{errors.price}</span>}
          </div>
          <div className="form-group">
            <label>Duration</label>
            <input
              type="text"
              name="duration"
              value={courseData.duration}
              onChange={handleInputChange}
              className={errors.duration ? "error" : ""}
            />
            {errors.duration && (
              <span className="error-text">{errors.duration}</span>
            )}
          </div>
          <div className="form-group">
            <label>Level</label>
            <select
              name="level"
              value={courseData.level}
              onChange={handleInputChange}
              className={errors.level ? "error" : ""}
            >
              <option value="">Select Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            {errors.level && <span className="error-text">{errors.level}</span>}
          </div>
          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={courseData.category}
              onChange={handleInputChange}
              className={errors.category ? "error" : ""}
            />
            {errors.category && (
              <span className="error-text">{errors.category}</span>
            )}
          </div>
          <div className="form-group">
            <label>Featured</label>
            <input
              type="checkbox"
              name="isFeatured"
              checked={courseData.isFeatured}
              onChange={handleInputChange}
            />
          </div>
          {/* Add more form fields as needed */}
          <button type="submit">Create Course</button>
        </form>
      </div>
    </section>
  );
};

export default CreateCourse;
