import React, { useState ,useEffect } from "react";
// import {  useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Contactus = () => {
  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY > 0) {
        document.querySelector(".header").classList.add("active");
      } else {
        document.querySelector(".header").classList.remove("active");
      }
      let menu = document.querySelector("#menu-btn1");
      let navbar = document.querySelector(".navbar");
      menu.classList.remove("fa-times");
      navbar.classList.remove("active");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mob: "",
    city:"",
    subject:"",
  });
  const [error, setError] = useState("");
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      return;
    }
    
  };

  const isFormValid = () => {
    if (
      data.firstName.trim() === "" ||
      data.lastName.trim() === "" ||
      data.email.trim() === "" ||
      data.mob.trim() === "" ||
      data.city.trim() === "" ||
      data.subject.trim() === "" 
    ) {
      setError("Please fill in all the fields.");
      return false;
    }

    const firstnameRegex = /^[a-zA-Z_]{3,16}$/;
    if (!firstnameRegex.test(data.firstName.trim())) {
      setError("Please enter valid name.");
      return false;
    }

    const lastnameRegex = /^[a-zA-Z_]{3,16}$/;
    if (!lastnameRegex.test(data.lastName.trim())) {
      setError("Please enter valid name.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      setError("Invalid email address.");
      return false;
    }

    const mobRegex = /^\d{10}$/;
    if (!mobRegex.test(data.mob.trim())) {
      setError("Invalid mobile number.");
      return false;
    }

    const cityRegex = /^[a-zA-Z_]{2,30}$/;
    if (!cityRegex.test(data.city.trim())) {
      setError("Please enter valid city.");
      return false;
    }


    const SubjectRegex = /^.{1,50}$/;
    if (!SubjectRegex.test(data.subject.trim())) {
      setError("This is mandetory.");
      return false;
    }

    setError("");
    return true;
  };

  // function closeContactonclick() {
  //   document.querySelector(".contact-form-container").classList.remove("active");
  // }

  return (
    <>
      <section className="contact" id="contact">
        <div className="contact-form-container">
          <div className={styles.sendmessage_container}>
            <div className={styles.sendmessage_form_container}>
              <div className={styles.left}>
                <h1>Get In Touch</h1>
                <h4>We're open for any suggetion or just to have a chat</h4>
                <h5>
                  Address : Road 198 West 21th Street, Suite 721 kharghar WW
                  10016
                </h5>
                <h5>Phone :+91 8421097834</h5>
                <h5>Email: E-paathshala@gmail.com</h5>
                <h5>Channel : www.epaathshala.com</h5>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8596674030177!2d73.05167127602157!3d19.025904453541692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c24cce39457b%3A0x8bd69eab297890b0!2sCentre%20for%20Development%20of%20Advanced%20Computing%20(CDAC)!5e0!3m2!1sen!2sin!4v1688837242819!5m2!1sen!2sin" width={"90%"} height={"50%"} style={{border: "black"}}  loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

              </div>

              <div className={styles.right}>
                <form
                  className={styles.form_container}
                  onSubmit={handleFormSubmit}
                >
                  <h1>Contact Us</h1>
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    onChange={handleChange}
                    value={data.firstName}
                    required
                    className={styles.input}
                  />

                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    onChange={handleChange}
                    value={data.lastName}
                    required
                    className={styles.input}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    value={data.email}
                    required
                    className={styles.input}
                  />
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    name="mob"
                    onChange={handleChange}
                    value={data.mob}
                    required
                    className={styles.input}
                  />
                  <input
                    type="text"
                    placeholder="City"
                    name="city"
                    onChange={handleChange}
                    value={data.city}
                    required
                    className={styles.input}
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    onChange={handleChange}
                    value={data.subject}
                    required
                    className={styles.input}
                  />

                  {error && <div className={styles.error_msg}>{error}</div>}
                  <button type="submit" className={"btn1"}>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactus;



