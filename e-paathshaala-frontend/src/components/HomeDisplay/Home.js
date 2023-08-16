import "./normalize.css";
import "../CSS/style.css";
import { useEffect, useState } from "react";
import Reviews from "../reviews/reviews";
import { Link } from "react-router-dom";

function Home() {
  const [parallaxElements, setParallaxElements] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      parallaxElements.forEach((elm) => {
        let speed = elm.getAttribute("data-speed");
        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerHeight - e.pageY * speed) / 90;
        elm.style.transform = `translateX(${y}px) translateY(${x}px)`;
      });
    };

    const homeElement = document.querySelector(".home");
    const elements = Array.from(document.querySelectorAll(".home-parallax"));

    setParallaxElements((prevElements) => {
      if (prevElements.length !== elements.length) {
        return elements;
      }
      return prevElements;
    });

    if (homeElement) {
      homeElement.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (homeElement) {
        homeElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [parallaxElements]);

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

  return (
    <>
      {/* parallax */}
      <section className="home" id="home">
        <h1 className="home-parallax" data-speed={-5}>
          find your course
        </h1>
        <img
          className="home-parallax"
          data-speed={6}
          src="./images/students.png"
          alt=" "
        />{" "}
        {/* <a href="/Vehicles" className="btn1 home-parallax" data-speed={7}>
          explore cars
        </a> */}
        <Link to={"/Vehicles"} className=" btn1 home-parallax" data-speed={7}>
          Explore Courses
        </Link>
      </section>
      {/* paralax end */}

      {/* icon section start */}
      <section className="icons-container">
        <div className="icons">
          <i className="fa-solid fa-house fa-beat-fade" />
          <div className="content">
            <h3>190+</h3>
            <p>Courses</p>
          </div>
        </div>
        <div className="icons">
          <i className="fa-solid fa-car fa-beat" />
          <i className="fa-solid fa-car fa-beat" />
          <div className="content">
            <h3>1000+</h3>
            <p>Success Stories</p>
          </div>
        </div>
        <div className="icons">
          <i className="fa-solid fa-users-rectangle fa-beat" />
          <div className="content">
            <h3>450+</h3>
            <p>Eudcators</p>
          </div>
        </div>
        <div className="icons">
          <i className="fa-solid fa-car fa-beat" />
          <i className="fa-solid fa-car fa-beat" />
          <div className="content">
            <h3>89K+</h3>
            <p>New Students</p>
          </div>
        </div>
      </section>
      {/* icon section end  */}

      {/* service section start */}
      <section id="Services" className="services">
        <h1 className="heading">
          Our <span>Services</span>
        </h1>
        <div className="boxContainer">
          <div className="box">
            <i className="fas fa-car" />
            <h3>Car Selling</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              facilis sapiente suscipit explicabo natus ducimus?
            </p>
            <button className="btn1">Read More</button>
          </div>
          <div className="box">
            <i className="fas fa-tools" />
            <h3>Parts Repair</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              facilis sapiente suscipit explicabo natus ducimus?
            </p>
            <button className="btn1">Read More</button>
          </div>
          <div className="box">
            <i className="fas fa-car-crash" />
            <h3>Car Insurance</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              facilis sapiente suscipit explicabo natus ducimus?
            </p>
            <button className="btn1">Read More</button>
          </div>
          <div className="box">
            <i className="fas fa-car-battery" />
            <h3>Battery Replacement</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              facilis sapiente suscipit explicabo natus ducimus?
            </p>
            <button className="btn1">Read More</button>
          </div>
          <div className="box">
            <i className="fas fa-gas-pump" />
            <h3>Oil Change</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              facilis sapiente suscipit explicabo natus ducimus?
            </p>
            <button className="btn1">Read More</button>
          </div>
          <div className="box">
            <i className="fas fa-headset" />
            <h3>24*7 Support</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              facilis sapiente suscipit explicabo natus ducimus?
            </p>
            <button className="btn1">Read More</button>
          </div>
        </div>
      </section>
      {/* service section end  */}

      <Reviews />

      {/* <section className="reviews" id="reviews">
        <h1 className="heading">
          Client's <span>Review</span>
        </h1>
        <div className="swiper reviews-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide box">
              <img src="./images/user1.png" alt="" />
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, earum veritatis fuga doloremque repellat neque
                  sapiente corporis ipsum eum praesentium.
                </p>
                <h3>ballu</h3>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
              </div>
            </div>
            <div className="swiper-slide box">
              <img src="./images/user2.png" alt="" />
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, earum veritatis fuga doloremque repellat neque
                  sapiente corporis ipsum eum praesentium.
                </p>
                <h3>ballu</h3>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
              </div>
            </div>
            <div className="swiper-slide box">
              <img src="./images/user3.png" alt="" />
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, earum veritatis fuga doloremque repellat neque
                  sapiente corporis ipsum eum praesentium.
                </p>
                <h3>ballu</h3>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
              </div>
            </div>
            <div className="swiper-slide box">
              <img src="./images/user4.png" alt="" />
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, earum veritatis fuga doloremque repellat neque
                  sapiente corporis ipsum eum praesentium.
                </p>
                <h3>ballu</h3>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
              </div>
            </div>
            <div className="swiper-slide box">
              <img src="./images/user1.png" alt="" />
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, earum veritatis fuga doloremque repellat neque
                  sapiente corporis ipsum eum praesentium.
                </p>
                <h3>ballu</h3>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
              </div>
            </div>
            {/* Add other swiper-slide elements here */}
      {/* </div>
          <div className="swiper-pagination" />
        </div>
      </section> */}

      {/* review section starts */}

      {/* review section end */}
    </>
  );
}

export default Home;
