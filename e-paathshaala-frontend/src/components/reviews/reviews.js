import React from "react";
// import Carousel from "react-bootstrap/Carousel";
import Carousel from "react-bootstrap/Carousel";

import "../CSS/normalize.css";
import "../CSS/style.css";

export default function Reviews() {
  return (
    <>
      <h1 className="heading">
        Client's <span>Review</span>
      </h1>
      <Carousel interval={1000}>
        <Carousel.Item>
          <section className="reviews" id="reviews">
            <div className=" reviews-slider">
              <div className="swiper-wrapper">
                <div className="box">
                  <img src="./images/user2.png" alt="" />
                  <div className="content">
                    <p>
                      It was a nice experience and had a good and clear cut view
                      on the topics. deep learning for lifetime.
                    </p>
                    <h3>Bhavit Rathod</h3>
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Carousel.Item>
        <Carousel.Item>
          <section className="reviews" id="reviews">
            <div className=" reviews-slider">
              <div className="swiper-wrapper">
                <div className="box">
                  <img
                    src="https://static.toiimg.com/photo/91859425.cms"
                    alt=""
                  />
                  <div className="content">
                    <p>
                      e-Path-shala is an excellent website which has almost all
                      the course one can think of at a very reasonable pricing
                      from industry experts
                    </p>
                    <h3>Gaurav More</h3>
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Carousel.Item>
        <Carousel.Item>
          <section className="reviews" id="reviews">
            <div className=" reviews-slider">
              <div className="swiper-wrapper">
                <div className="box">
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BNDY0NTQ2MmMtMWY0OS00OTgxLWJmNGYtMTYwMmI2ZjNiMDRlXkEyXkFqcGdeQXVyMjQ2MDI5ODE@._V1_FMjpg_UX1000_.jpg"
                    alt=""
                  />
                  <div className="content">
                    <p>
                      e-Path-shala offers practice exercises, instructional
                      videos, and a personalized learning dashboard that empower
                      students to study at their ownpace in and outside of the
                      classroom.e-Path-shala focus on skill mastery to help
                      learners establish strong foundations, so there is no
                      limit to what they can learn next.
                    </p>
                    <h3>Omkar Bhojane</h3>
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Carousel.Item>
        <Carousel.Item>
          <section className="reviews" id="reviews">
            <div className=" reviews-slider">
              <div className="swiper-wrapper">
                <div className="box">
                  <img
                    src="https://marathimovieworld.com/images/aditi-dravid-actress-mazhya-navryachi-bayko.jpg"
                    alt=""
                  />
                  <div className="content">
                    <p>
                      e-Path-shala is designed in such a way that the student
                      can select the subject to learn easily and Teachers can
                      select the subject to teach easily.
                    </p>
                    <h3>Aditi Dravid</h3>
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Carousel.Item>
        <Carousel.Item>
          <section className="reviews" id="reviews">
            <div className=" reviews-slider">
              <div className="swiper-wrapper">
                <div className="box">
                  <img src="./images/user0.jpeg" alt="" />
                  <div className="content">
                    <p>
                      This website provides information on educational school
                      subjects for novice intermediates as well as expert,
                      learners, teachers and parents.
                    </p>
                    <h3>Piyush Kulkarni</h3>
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Carousel.Item>
        <Carousel.Item>
          <section className="reviews" id="reviews">
            <div className=" reviews-slider">
              <div className="swiper-wrapper">
                <div className="box">
                  <img
                    src="https://storage.googleapis.com/ares-profile-pictures/hd/saiprasad_nimbalkar09-fa4d3a9673c26e058c0f2db655f86144_hd.jpg"
                    alt=""
                  />
                  <div className="content">
                    <p>
                      Each new topic is hyperlinked to a page which provides
                      detailed content on the subject.
                    </p>
                    <h3>Saiprasad Nimbalkar</h3>
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
