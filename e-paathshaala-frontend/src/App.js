import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navigationbar from "./components/NavigationBar/Navigationbar";
import Home from "./components/HomeDisplay/Home";
import Notfound from "./components/NotFound/NotFound";
import Contact from "./components/ContactUsAboutUs/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact/>} />
        

          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
