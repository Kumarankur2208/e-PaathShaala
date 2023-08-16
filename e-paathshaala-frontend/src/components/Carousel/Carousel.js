import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  const sliderImgStyle = {
    width: "100vw", // Set the desired width
    height: "700px", // Set the desired height
    objectFit: "cover",
    display: "block",
    margin: "0 auto",
  };

  return (
    <Slider {...settings}>
      <div className="wdt">
        <img style={sliderImgStyle} alt="pic1" src="image1path" />
      </div>
      <div className="wdt">
        <img style={sliderImgStyle} alt="pic2" src="image2path" />
      </div>
      <div className="wdt">
        <img style={sliderImgStyle} alt="pic3" src="image3path" />
      </div>
      <div className="wdt">
        <img style={sliderImgStyle} alt="pic4" src="image4path " />
      </div>
    </Slider>
  );
}

export default Carousel;
