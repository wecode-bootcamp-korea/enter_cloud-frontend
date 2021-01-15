import React from 'react';
import './Contentlist.scss';

class Contentlist extends React.Component {
  render() {
    return (
      <>
        <section className="left">
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
                저희 공간은 다년간, 아티스트 쇼케이스, 팬미팅, 생일파티, MICE를
                진행한 까페입니다. 2층에 테라스가 있고, 인도네시아 발리 느낌과
                스포츠바가 어루어진 하이브리드 공간입니다. Excluslive 한 EVENT를
                지속적으로 진행하고 있으며, 까페 이기 때문에 음료 와 주류도
                이용가능하시고, 4K Sony 티비와, 프로젝터, 플레이스테이션등
                다양한 오락거리도 구비되어 있습니다. 신사동 가로수길에서 가장
                핫한 거리에 위치에 있어서 많은 광고에도 등장한 저희 공간을
                부담없는 요금과 친절한 서비스로 이용해 보세요:)
              </p>
              <ul className="first_list">
                <li className="list">
                  <span className="host_sub_time">영업시간</span>
                  <span className="host_time">0~24시</span>
                </li>
                <li>
                  <span className="host_sub_day">휴무일</span>
                  <span className="host_day">없음</span>
                </li>
              </ul>
            </div>
            <div className="second_box">
              <h4 className="second_subject">시설안내</h4>
              <ul className="second_list">
                <li>
                  <span className="content_number">1</span>
                  <span className="content_text">
                    남녀 화장실, 테라스, 에스프레소 머신, 프로젝터, 4K 티비,
                    각종 운동기구, 스피커, 냉장고, 냉동고, 오븐
                  </span>
                </li>
              </ul>
            </div>
            <div className="third_box">
              <h4 className="third_subject">환불 규정</h4>
              <p className="third_text">
                <em>
                  이용당일(첫 날) 이후에 환불 관련 사항은 호스트에게 직접
                  문의하셔야 합니다.
                </em>
                <br />
                결제 후 2시간 이내에는 100% 환불이 가능합니다.(단, 이용시간
                전까지만 가능)
              </p>
              <ul className="third_list">
                <li>
                  <span className="refund_day">이용 8일 전</span>
                  <span className="refund_cost">총 금액의 100% 환불</span>
                </li>
              </ul>
              <div className="map_box">
                <div className="map_text">
                  <p className="map_title">발리와</p>
                  <p className="map_adress">
                    서울 강남구 압구정로10길 30-8 2층 발리와
                  </p>
                </div>
                <div className="map_view"></div>
              </div>
              <div className="review_container">
                <div className="review_text">
                  <h4 className="text_title">이용후기</h4>
                  <span>28개</span>
                  <span className="dot"></span>
                  <h4 className="text_title">평균 평점</h4>
                  <span>4.9</span>
                </div>
                <div className="review_box">
                  <ul className="review_list">
                    <li>
                      <img
                        className="user_img"
                        alt="suhyeon"
                        src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/117695455_303895957724855_8135055200715456199_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=S2wPguRXnCwAX-EWHMR&tp=1&oh=f146edea232a56224dba39d5e493a072&oe=60161C13"
                      />
                      <div className="user_review">
                        <div className="user_text">
                          <p className="user_id">영지버섯</p>
                          <p className="user_comment">
                            너무 좋았어요 친절 하시고 또 이용할께요
                          </p>
                          <span>2021.01.11 13:39:43</span>
                        </div>
                        <ul className="like_box">
                          <li>
                            <img alt="like" src="./images/star.svg" />
                          </li>
                          <li>
                            <img alt="like" src="./images/star.svg" />
                          </li>
                          <li>
                            <img alt="like" src="./images/star.svg" />
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                  <div className="paging">
                    <a className="btn_previous" href="/">
                      <button></button>
                    </a>
                    <a href="/">1</a>
                    <a href="/">2</a>
                    <a href="/">3</a>
                    <a href="/">4</a>
                    <a href="/">5</a>
                    <a className="btn_next" href="/">
                      <button></button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Contentlist;
