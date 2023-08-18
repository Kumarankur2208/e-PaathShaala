import React from "react";
import "./footer.css"; // Import the external CSS file

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container-fluid">
          <div className="row p-3">
            <div className="col-lg-4 col-sm-6">
              <div className="single-box">
                <h2>Our Courses</h2>
                <ul>
                  <li>
                    <a href="#" className="route-link">
                      Delhi → Chandigarh
                    </a>
                  </li>
                  <li>
                    <a href="#" className="route-link">
                      Mumbai → Pune
                    </a>
                  </li>
                  <li>
                    <a href="#" className="route-link">
                      Kanpur → Lucknow
                    </a>
                  </li>
                  <li>
                    <a href="#" className="route-link">
                      Bengaluru → Chennai
                    </a>
                  </li>
                  <li>
                    <a href="#" className="route-link">
                      Pune → Mumbai
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-box">
                <h2>About</h2>
                <ul>
                  <li>
                    <a href="#" className="about-link">
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a href="#" className="about-link">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="about-link">
                      Help Centre
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-box">
                <h2>Follow us on</h2>
                <hr />
                <p className="socials d-flex justify-content-evenly">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    {/* ... Facebook SVG path */}
                  </svg>
                  {/* ... other SVG icons */}
                </p>
              </div>
            </div>
          </div>
          <div className="row text-center p-4">
            <div className="col">
              <h6>All rights reserved ©</h6>
            </div>
            <div className="col text-right">
              <h6>Designed by- Team 03, WPT, CDAC Mumbai</h6>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
