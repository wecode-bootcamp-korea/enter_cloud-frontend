import React from "react";
import "react-router-dom";
import Nav from "../../Components/Nav/Nav"
import Slide from "./Components/Slide/Slide";
import Category from "./Components/Category/Category";
import Listpage from "./Components/Listpage/Listpage";
import Recommend from "./Components/Recommned/Recommend";
import Userreview from "./Components/Userreview/Userreview";
import Footer from "./Components/Footer/Footer";
import "./Main.scss";

export class Main extends React.Component {
  render() {
    return (
      <div className="main">
      <Nav />
        <div className="slide"><Slide /></div>
        <section className="main_category">
          <div className="main_category_wrap1">
            <Category />
          </div>
          <section className="main_listpage">
            <Listpage />
          </section>
          <div className="main_category_wrap2">
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
