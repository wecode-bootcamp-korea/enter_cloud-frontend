import React from "react";
import "./Main.scss";
import "react-router-dom";
import Slide from "./Components/Slide/Slide";
import Footer from "./Components/Footer/Footer";

export class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Slide />
        <section className="main_category">
          <div className="main_category_wrap1">
            <span>어떤 공간을 찾고 있나요?</span>
            <ul>
              <li>1</li>
              <li>2</li>
            </ul>
          </div>
          <div className="main_category_wrap2">
            <span>오늘의 추천공간</span>
            <ul>
              <li>1</li>
              <li>2</li>
            </ul>
          </div>
        </section>
        <section className="main_review">
          <div className="main_review_wrap">
            <h2>이용자 리뷰</h2>
            <h3>생생한 후기를 만나보세요</h3>
            <div className="main_border">보더</div>
            <button>더보기</button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
export default Main;
