import React from "react";
import Slider from "react-slick";
import "../Components/Slide.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Slide extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    };
    return (
      <div className="Slide">
        <Slider {...settings}>
          <div>
            <h3>
              <img
                alt="아무거나"
                src="https://kr.object.ncloudstorage.com/scloud-service/service/158518632_e98af8f5663868d68f8d7b68df2584b0.png"
              />
            </h3>
          </div>
          <div>
            <h1>2</h1>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
export default Slide;
