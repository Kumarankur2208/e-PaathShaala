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
                      From inspection to paperwork, I completed the entire
                      process from the comfort of home. Lelo Gadi team was very
                      professional and friendly.
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
                      We didn’t think selling our car could be so fast and easy.
                      We received the best amount and it was same as the online
                      estimate.
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
                      My friend recommended me Lelo Gadi and I am glad he did. The
                      online quote was exactly matched after evaluation and
                      payment was done within 30 minutes
                    </p>
                    <h3>Omkar Bhojane</h3>
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <i className="far fa-star" />
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
                    src="https://marathimovieworld.com/images/aditi-dravid-actress-mazhya-navryachi-bayko.jpg"
                    alt=""
                  />
                  <div className="content">
                    <p>
                      The entire process was seamless and very quick. I checked
                      the quote online and Lelo Gadi executive came for evaluation
                      the same day. The entire process took less than 24 hours.
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
                      Lelo Gadi becoming synonymous with trustworthy experience. I checked
                      the online estimate and received the same amount after
                      evaluation. The process is quick, simple and professional.
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
                      I love my car and with Lelo Gadi I got the confidence that
                      the car will be in safe custody till it gets transferred
                      to the new owner.
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
