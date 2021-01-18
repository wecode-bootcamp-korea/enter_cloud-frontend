import React from 'react';
import './Contentlist.scss';
import { listItem, refund } from './contentFixData';

class Contentlist extends React.Component {
  constructor() {
    super();
    this.state = {
      listItem: [],
      refund: [],
      contentData: [],
    };
  }

  componentDidMount() {
    fetch('/data/Details.json')
      .then(data => data.json())
      .then(data => this.setState({ contentData: data[0].leftData }));
    this.setState({ listItem: listItem, refund: refund });
  }
  render() {
    const {
      introduction,
      hostTime,
      hostDay,
      facility,
      notice,
      profileImg,
      userName,
      text,
      postTime,
    } = this.state.contentData;
    const { listItem, refund } = this.state;
    console.log({ facility });
    return (
      <>
        <section className="left">
          <div className="left_list">
            <ul className="list_click">
              {listItem.map(listItemData => {
                return (
                  <li>
                    <a href="/">{listItemData}</a>
                  </li>
                );
              })}
            </ul>
            <div className="first_box">
              <h4 className="first_subject">공간소개</h4>
              <p className="first_text">{introduction}</p>
              <ul className="first_list">
                <li className="host_hours">
                  <span className="host_sub_time">영업시간</span>
                  <span className="host_time">{hostTime}</span>
                </li>
                <li className="host_holiday">
                  <span className="host_sub_day">휴무일</span>
                  <span className="host_day">{hostDay}</span>
                </li>
              </ul>
            </div>
            <div className="second_box">
              <h4 className="second_subject">시설안내</h4>
              <ul className="second_list">
                {facility &&
                  facility.map((ele, idx) => {
                    return (
                      <li key={idx}>
                        <span className="content_number">{idx + 1}</span>
                        <span className="content_text">{ele}</span>
                      </li>
                    );
                  })}
              </ul>
              <h4 className="second_subject">예약시 유의사항</h4>
              <ul className="second_list">
                {notice &&
                  notice.map((ele, idx) => {
                    return (
                      <li>
                        <span className="content_number">{idx + 1}</span>
                        <span className="content_text">{ele}</span>
                      </li>
                    );
                  })}
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
                {refund.map(refundData => {
                  return (
                    <li>
                      <span className="refund_day">
                        이용 {refundData.day}일 전
                      </span>
                      <span className="refund_cost">
                        총 금액의 {refundData.percent} 환불
                      </span>
                    </li>
                  );
                })}
                <li>
                  <span className="refund_day">이용 전날</span>
                  <span className="refund_cost">환불불가</span>
                </li>
                <li>
                  <span className="refund_day">이용 당일</span>
                  <span className="refund_cost">환불불가</span>
                </li>
              </ul>
              {/* <div className="map_box">
                <div className="map_text">
                  <p className="map_title">발리와</p>
                  <p className="map_adress">
                    서울 강남구 압구정로10길 30-8 2층 발리와
                  </p>
                </div>
                <div className="map_view"></div>
              </div> */}
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
                        src={profileImg}
                      />
                      <div className="user_review">
                        <div className="user_text">
                          <p className="user_id">{userName}</p>
                          <p className="user_comment">{text}</p>
                          <span>{postTime}</span>
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
