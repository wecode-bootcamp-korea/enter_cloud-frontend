import React from 'react';
import 'react-router-dom';
import Nav from '../../Components/Nav/Nav';
import Slide from './Components/Slide/Slide';
import Category from './Components/Category/Category';
import Recommend from './Components/Recommned/Recommend';
// import Userreview from "./Components/Userreview/Userreview";
import Userslide from './Components/Userslide/Userslide';
import './Main.scss';

export class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Nav />
        <div className="slide">
          <Slide />
        </div>
        <section className="main_category">
          <div className="main_category_wrap1">
            <Category />
          </div>
          <section className="main_listpage"></section>
          <div className="main_category_wrap2">
            <Recommend />
          </div>
        </section>
        <section className="main_review">
          {/* <Userreview /> */}
          <Userslide />
        </section>
      </div>
    );
  }
}
export default Main;
