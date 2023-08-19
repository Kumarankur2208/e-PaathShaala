import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navigationbar from "./components/NavigationBar/Navigationbar";
import Home from "./components/HomeDisplay/Home";
import Notfound from "./components/NotFound/NotFound";
import Contact from "./components/ContactUsAboutUs/Contact";
import Footer from "./components/Footer/Footer";
import StudentDashboard from "./components/Student Dashboard/StudentDashboard";
import AdminDashboard from "./components/Admin Dashboard/AdminDashboard";
import FacultyDashboard from "./components/Faculty Dashboard/FacultyDashboard";
import About from "./components/ContactUsAboutUs/About";
import LoginPage from "./components/Login SignUp/LoginPage";
import SignupPage from "./components/Login SignUp/SignupPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ContactUs" element={<Contact />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Signup" element={<SignupPage />} />
          <Route path="/StudentDashboard" element={<StudentDashboard />} />
          <Route path="/FacultyDashboard" element={<FacultyDashboard />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />

          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
