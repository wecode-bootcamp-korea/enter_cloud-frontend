import React from 'react';
import SlideMenu from '../SlideMenu/SlideMenu';
import './Nav.scss';

export class Nav extends React.Component {
  render() {
    return (
      <nav className="Nav">
        <section>
          <h1>EnterCloud</h1>
          <div className="search_wr">
            <input
              type="text"
              placeholder="지역 또는 공간유형을 검색해보세요!"
            />
            <button className="btn_search btn_com">검색</button>
          </div>
          <ul>
            <li>
              <a href="#none">공간 등록하기</a>
            </li>
            <li>
              <a href="#none">기획전</a>
            </li>
          </ul>
          <SlideMenu />
        </section>
      </nav>
    );
  }
}

export default Nav;
