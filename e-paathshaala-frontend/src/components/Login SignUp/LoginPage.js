import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = "Username is required";
    } else if (!/^(?=.*[a-zA-Z])[a-zA-Z\d]+$/.test(formData.username)) {
      newErrors.username = "Invalid Username";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#]).{8,}$/.test(
        formData.password
      )
    ) {
      newErrors.password = "Invalid Password";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (validateForm()) {
  //     console.log('Login submitted:', formData);
  //   }
  // };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // User already logged in, redirect to home page
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/login",
        formData
      );

      // Determine token expiration time
      const tokenExpiration = formData.remember ? 30 : 1; // 30 days if remembered, 1 day if not

      // Calculate expiration timestamp
      const expirationTimestamp =
        Date.now() + tokenExpiration * 24 * 60 * 60 * 1000;
      if (response.data) {
        const { token, id, username, email, password, role } =
          response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("userId", id);
        localStorage.setItem("username", username);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);
        localStorage.setItem("userRole", role);
        localStorage.setItem("tokenExpiration", expirationTimestamp);
        navigate("/home");
      } else {
        setErrors("Invalid username or password");
      }
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  return (
    <div className="signup-container">
      <h1>Login</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleChange}
            className={errors.username ? "error" : ""}
          />
          {errors.username && (
            <span className="error-text">{errors.username}</span>
          )}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <span className="error-text">{errors.password}</span>
          )}
        </div>
        <div className="remember">
          <input
            type="checkbox"
            name="remember"
            checked={formData.remember}
            onChange={handleChange}
          />
          <label>Remember Me</label>
        </div>
        <button type="submit">Login</button>
        <div className="signup-link">
          <p>
            Don't have an account? <a href="/SignUp">Sign Up</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
