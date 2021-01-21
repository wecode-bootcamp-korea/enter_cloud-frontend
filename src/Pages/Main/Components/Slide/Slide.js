import React from 'react';
import Slider from 'react-slick';
import './Slide.scss';

class Slide extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
    };
    return (
      <Slider {...settings}>
        <div>
          <img
            alt="아무거나"
            src="https://kr.object.ncloudstorage.com/scloud-service/service/158518632_e98af8f5663868d68f8d7b68df2584b0.png"
          />
        </div>
        <div>
          <img
            alt="두번째"
            src="https://kr.object.ncloudstorage.com/scloud-service/service/161041879_9029ccb76db0cc5324ef20a0d670f894.png"
          />
        </div>
        <div>
          <img
            alt="세번째"
            src="https://kr.object.ncloudstorage.com/scloud-service/service/159532123_9351cf15881a60bd7f960b43edf68345.png"
          />
        </div>
      </Slider>
    );
  }
}
export default Slide;
