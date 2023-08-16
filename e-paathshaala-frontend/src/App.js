import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navigationbar from "./components/NavigationBar/Navigationbar";
import Home from "./components/HomeDisplay/Home";
import Notfound from "./components/NotFound/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Serv" element={<Serv />} />
          <Route path="/Vid" element={<Vid />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/Featured" element={<Featured />} />
          <Route path="/Vehicles" element={<Vehicles />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/UserDashboard" element={<UserDashboard />} />
          <Route path="/AddNewCar" element={<AddNewCar />} />
          <Route path="/AdminLogin" element={<AdminLogin />} /> */}
          {/* <Route
            path="/vehicles"
            element={
              <ProtectedRoute>
                <Vehicles />
              </ProtectedRoute>
            }
          /> */}

          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;
