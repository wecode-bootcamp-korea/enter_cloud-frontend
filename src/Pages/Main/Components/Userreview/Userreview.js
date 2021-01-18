import React from "react";
import "./Userreview.scss";

class Userreview extends React.Component {
  constructor() {
    super();
    this.state = {
      initData: [],
    };
  }

  componentDidMount() {
    fetch("/Data/Userreview/Userreview.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          initData: res.data,
        });
      });
  }

  render() {
    return (
      <div className="user_review">
        <article>
        <div className="review_title">
            <h2>이용자 리뷰</h2>
            <h3>생생한 후기를 만나보세요</h3>
        </div>
        <div className="review_map">
          {this.state.initData.map((review) => {
            return (
              <div className="review_card" key={review.id}>
                <img className="review_img" src={review.imgsrc} />
                <div className="review_content">
                <div className="title">{review.title}</div>
                <div className="price">{review.price}</div>
                <div className="review">{review.review}</div>
                </div>
              </div>
            );
          })}
          </div>
          <button>더보기</button>
        </article>
      </div>
    );
  }
}
export default Userreview;
