import React from "react";
import { Link } from "react-router-dom";
import SlideMenu from "../SlideMenu/SlideMenu";
import "./Nav.scss";

export class Nav extends React.Component {
  render() {
    return (
      <nav className="Nav">
        <section>
          <h1>
            <Link to="/">EnterCloud</Link>
          </h1>
          <div className="search_wr">
            <input
              type="text"
              placeholder="지역 또는 공간유형을 검색해보세요!"
            />
            <button className="btn_search btn_com">검색</button>
          </div>
          <ul>
            <li>
              <Link to="/Login">로그인</Link>
            </li>
            <li>
              <Link to="/SignUp">회원가입</Link>
            </li>
          </ul>
          <SlideMenu />
        </section>
      </nav>
    );
  }
}

export default Nav;
