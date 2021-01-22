import React from 'react';
import { withRouter } from 'react-router-dom';
import './Recommend.scss';

class Recommend extends React.Component {
  constructor() {
    super();
    this.state = {
      recommendData: [],
    };
  }

  componentDidMount() {
    fetch('/Data/RecommendData/spaceMainData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          recommendData: res.space_card,
        });
      });
  }

  toDetail = id => {
    this.props.history.push(`/Details/${id}`);
  };

  render() {
    return (
      <div className="recommend">
        <span>오늘의 추천공간</span>
        <section>
          {this.state.recommendData &&
            this.state.recommendData.map(recommendCard => {
              return (
                <div
                  className="recommend_card"
                  key={recommendCard.id}
                  onClick={() => this.toDetail(recommendCard.id)}
                >
                  <div className="recommend_img">
                    <img alt="추천공간이미지" src={recommendCard.main_image} />
                  </div>
                  <div className="recommend_content">
                    <div className="recommend_content_top">
                      {recommendCard.name}
                    </div>
                    <div className="recommend_content_mid">
                      <div className="location">{recommendCard.location}</div>
                      {recommendCard.tags.map(tag => (
                        <span>{tag}</span>
                      ))}
                    </div>
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

export default withRouter(Recommend);
