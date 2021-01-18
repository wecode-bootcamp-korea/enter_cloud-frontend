import React from "react";
import "./Recommend.scss";

class Recommend extends React.Component {
  constructor() {
    super();
    this.state = {
      recommendData: [],
    };
  }

  componentDidMount() {
    fetch("/Data/RecommendData/RecommendData.json", { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          recommendData: res.data,
        });
      });
  }

  render() {
    return (
      <div className="recommend">
        <section>
          {this.state.recommendData.map((recommendCard) => {
            return (
              <div className="recommend_card" key={recommendCard.id}>
                <div className="recommend_img">
                  <img alt="아무거나" src={recommendCard.imgsrc} />
                </div>
                <div className="recommend_content">
                  <div className="recommend_content_top">
                    {recommendCard.name}
                  </div>
                  <div className="recommend_content_mid">tags</div>
                  <div className="recommend_content_bottom">
                    <div className="price_wrap">
                      <h2>{recommendCard.price}</h2>
                      <h3>원/가격</h3>
                    </div>
                    <button>하트</button>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    );
  }
}

export default Recommend;
