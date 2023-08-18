import "./style.css";
import "./normalize.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import "../Serv/Serv.js";

//import Login from "../Login-Registration/Login/Login";
//import Signup from "../Login-Registration/SignUp/Signup";

function Navigationbar() {
  function menuOnclick() {
    let menu = document.querySelector("#menu-btn1");
    let navbar = document.querySelector(".navbar");
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
  }
  // function loginonclick() {
  //   document.querySelector(".login-form-container").classList.toggle("active");
  // }
  const isLoggedIn = !!localStorage.getItem("token");
const userRole = localStorage.getItem("userRole") === "true";

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
    localStorage.removeItem("userRole");
    navigate("/login");
  };

  return (
    <>
      <header className="header mb-3">
        <div id="menu-btn1" onClick={menuOnclick} className="fas fa-bars"></div>

        <Link to={"/home"} className="logo">
          e-<span>पाठ</span>SHAALA&nbsp;
          {/* <i className="fas fa-car-side" style={{ fontSize: "150%" }}></i> */}
          <i
            class="fa-solid fa-chalkboard-user fa-xl"
            style={{ fontSize: "150%" }}
          ></i>
        </Link>
        <nav className="navbar">
          <Link
            to={"/home"}
            className="nav-link active"
            style={{ backgroundColor: "transparent" }}
          >
            Home
          </Link>
          <Link
            to={"/Courses"}
            className="nav-link active"
            style={{ backgroundColor: "transparent" }}
          >
            Courses
          </Link>
          {/* <a href="/Home#Services"> Services</a> */}
          <Link
            to={"/Services"}
            className="nav-link active"
            style={{ backgroundColor: "transparent" }}
          >
            Our Services
          </Link>
          <Link
            to={"/Featured"}
            className="nav-link active"
            style={{ backgroundColor: "transparent" }}
          >
            Featured
          </Link>
          <Link
            to={"/ContactUs"}
            className="nav-link active"
            style={{ backgroundColor: "transparent" }}
          >
            Contact Us
          </Link>
          <Link
            to={"/AboutUs"}
            className="nav-link active"
            style={{ backgroundColor: "transparent" }}
          >
            About Us
          </Link>
          {/* <Link
            to={"/UserDashboard"}
            className="nav-link active"
            style={{ backgroundColor: "transparent" }}
          >
            <i class="fa-solid fa-bell fa-shake fa-2xl"></i>
          </Link> */}
          {isLoggedIn && (
            <Link
              to={userRole ? "/AdminDashboard" : "/UserDashboard"}
              className="nav-link active"
              style={{ backgroundColor: "transparent" }}
            >
              <i className="fa-solid fa-bell fa-shake fa-2xl"></i>
            </Link>
          )}
          {/* Conditionally render the UserDashboard link */}
          {/* {isLoggedIn && userRole === "USER" && (
            <Link
              to={"/UserDashboard"}
              className="nav-link active"
              style={{ backgroundColor: "transparent" }}
            >
              <i className="fa-solid fa-bell fa-shake fa-2xl"></i>
            </Link>
          )} */}

          {/* Conditionally render the AdminDashboard link */}
          {/* {isLoggedIn && userRole === "ADMIN" && (
            <Link
              to={"/AdminDashboard"}
              className="nav-link active"
              style={{ backgroundColor: "transparent" }}
            >
              <i className="fa-solid fa-bell fa-shake fa-2xl"></i>
            </Link>
          )} */}
        </nav>
        <div id="login-btn1">
          {localStorage.getItem("token") ? (
            <button type="button" className="btn1" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link
              to={"/login"}
              className="nav-link active"
              style={{ backgroundColor: "transparent" }}
            >
              {/* <button onClick={loginonclick} className="btn1"> */}
              <button className="btn1">Login</button>
              <i className="far fa-user"></i>
            </Link>
          )}
        </div>
      </header>
    </>
  );
}

export default Navigationbar;
