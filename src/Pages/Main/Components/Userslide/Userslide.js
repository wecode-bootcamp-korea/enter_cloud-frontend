import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Userslide.scss";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

export class Userslide extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: [],
    };
  }

  componentDidMount() {
    fetch("http://15.164.219.219:8000/reviews", { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          userData: res.review_card,
        });
      });
  }

  render() {
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
    return (
      <div className="user_slide">
        <Swiper spaceBetween={50} slidesPerView={3} navigation loop={true}>
          {this.state.userData?.map((userreview, idx) => {
            return (
              <SwiperSlide className="swiper_slide">
                <div key={idx} className="review_wrap">
                  <img
                    alt="이것은이미지"
                    className="review_img"
                    src={userreview.image_url}
                  />
                  {userreview.types.map((type) => (
                    <span>{type}</span>
                  ))}
                  <div className="name">{userreview.name}</div>
                  <div className="price">{userreview.price.price__max} 원</div>
                  <div className="content">{userreview.content}</div>
                </div>
              </SwiperSlide>
            );
          })}
          ...
        </Swiper>
      </div>
    );
  }
}

export default Userslide;
