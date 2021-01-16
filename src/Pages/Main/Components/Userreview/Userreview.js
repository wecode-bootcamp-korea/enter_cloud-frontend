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
          {this.state.initData.map((review) => {
            return (
              <div className="review_card" key={review.id}>
                <div className="title">{review.title}</div>
                <div className="price">{review.price}</div>
                <div className="review">{review.review}</div>
              </div>
            );
          })}
        </article>
      </div>
    );
  }
}
export default Userreview;
