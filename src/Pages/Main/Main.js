import React from "react";
import "react-router-dom";
import "./Main.scss";
import Slide from "./Components/Slide/Slide";
import Footer from "./Components/Footer/Footer";
import Category from "./Components/Category/Category";
import Userreview from "./Components/Userreview/Userreview";
import Recommend from "./Components/Recommned/Recommend";
import Nav from "../../Components/Nav/Nav"

export class Main extends React.Component {
  render() {
    return (
      <div className="main">
      <Nav />
        <div className="slide"><Slide /></div>
        <section className="main_category">
          <div className="main_category_wrap1">
            <span>어떤 공간을 찾고 있나요?</span>
            <Category />
          </div>
          <div className="main_category_wrap2">
            <span>오늘의 추천공간</span>
            <Recommend />
          </div>
        </section>
        <section className="main_review">
        <Userreview />
        </section>
        <Footer />
      </div>
    );
  }
}
export default Main;
