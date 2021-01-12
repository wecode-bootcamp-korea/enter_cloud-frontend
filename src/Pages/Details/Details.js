import React from 'react';
import './Details.scss';
import '../../Styles/Common.scss';

class Details extends React.Component {
  render() {
    return (
      <>
        <main className="detail_wraper">
          <section className="left_wraper">
            <div className="left_space">
              <h2>발리와</h2>
              <p>신사동 가로수길 2층</p>
              <ul>
                <li>#발리와</li>
              </ul>
              <img
                alt="사진1"
                src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.120.960.960a/s640x640/126390339_379190156847734_1432357968158798896_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=KMKp1B0FQhMAX914R7Z&tp=1&oh=6be4d1317195a9051f83593b5750c51e&oe=602825FA"
              />
              <div className="text_box">
                <h3>신사동 가로수길 2층에 위치한 햇살 좋은 공간</h3>
              </div>
            </div>
            <div className="left_list">
              <ul className="list_click">
                <li>
                  <a href="/">공간소개</a>
                </li>
                <li>
                  <a href="/">시설안내</a>
                </li>
              </ul>
              <div className="first_box">
                <h4 className="first_subject">공간 소개</h4>
                <p className="first_text">
                  저희 공간은 다년간, 아티스트 쇼케이스, 팬미팅, 생일파티,
                  MICE를 진행한 까페입니다. 2층에 테라스가 있고, 인도네시아 발리
                  느낌과 스포츠바가 어루어진 하이브리드 공간입니다. Excluslive
                  한 EVENT를 지속적으로 진행하고 있으며, 까페 이기 때문에 음료
                  와 주류도 이용가능하시고, 4K Sony 티비와, 프로젝터,
                  플레이스테이션등 다양한 오락거리도 구비되어 있습니다. 신사동
                  가로수길에서 가장 핫한 거리에 위치에 있어서 많은 광고에도
                  등장한 저희 공간을 부담없는 요금과 친절한 서비스로 이용해
                  보세요:)
                </p>
                <ul className="first_list">
                  <li>
                    <span></span>
                  </li>
                  <li>
                    <span></span>
                  </li>
                </ul>
              </div>
              <div className="second_box">
                <h4>시설안내</h4>
                <ul className="second_list">
                  <li>123</li>
                  <li>123</li>
                  <li>123</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="right_wraper"></section>
        </main>
      </>
    );
  }
}

export default Details;
