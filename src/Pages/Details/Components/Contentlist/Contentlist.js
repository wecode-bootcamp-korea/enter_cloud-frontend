import React from 'react';
import { listItem, refund, fixImg, reviewLike } from './contentFixData';
import './Contentlist.scss';

class Contentlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: [],
      refund: [],
    };
  }

  componentDidMount() {
    this.setState({ listItem: listItem, refund: refund });
  }

  render() {
    const {
      main_information,
      open_time,
      close_time,
      // site_url,
      // sub_images,
      break_days,
      facilities_informations,
      reservation_notes,
    } = this.props.detailsData;
    const { detailsReviewData } = this.props;
    const { listItem, refund } = this.state;
    return (
      <div className="Contentlist">
        <section className="left">
          <div className="left_list">
            <ul className="list_click">
              {listItem.map(listItemData => {
                return (
                  <li key={listItemData.id}>
                    <a href={listItemData.href}>{listItemData.name}</a>
                  </li>
                );
              })}
            </ul>
            <div className="first_box">
              <h4 id="list1" className="first_subject">
                공간 소개
              </h4>
              <p className="first_text">{main_information}</p>
              <ul className="first_list">
                <li className="host_hours">
                  <span className="host_sub_time">영업시간</span>
                  <span className="host_time">
                    {open_time}~{close_time}시
                  </span>
                </li>
                <li className="host_holiday">
                  <span className="host_sub_day">휴무일</span>
                  {break_days &&
                    break_days.map(day => {
                      return <span className="host_day">{day}요일 </span>;
                    })}
                </li>
              </ul>
            </div>
            <div className="second_box">
              <h4 id="list2" className="second_subject">
                시설 안내
              </h4>
              <ul className="second_list">
                {facilities_informations &&
                  facilities_informations.map((ele, idx) => {
                    return (
                      <li key={idx}>
                        <span className="content_number">{idx + 1}</span>
                        <span className="content_text">{ele}</span>
                      </li>
                    );
                  })}
              </ul>
              <h4 id="list3" className="second_subject">
                예약시 유의사항
              </h4>
              <ul className="second_list">
                {reservation_notes &&
                  reservation_notes.map((ele, idx) => {
                    return (
                      <li key={idx}>
                        <span className="content_number">{idx + 1}</span>
                        <span className="content_text">{ele}</span>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="third_box">
              <h4 id="list4" className="third_subject">
                환불 규정안내
              </h4>
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
                    <li key={refundData.id}>
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
                  <h4 id="list5" className="text_title">
                    이용후기
                  </h4>
                  <span>30개</span>
                  <span className="dot"></span>
                  <h4 className="text_Average">평균 평점</h4>
                  <span>4.8</span>
                </div>
                <div className="review_box">
                  <ul className="review_list">
                    {detailsReviewData &&
                      detailsReviewData.map(ele => {
                        return (
                          <li>
                            <img
                              className="user_img"
                              alt="suhyeon"
                              src={fixImg}
                            />
                            <div className="user_review">
                              <div className="user_text">
                                <p className="user_id">{ele.user_nickname}</p>
                                <p className="user_comment">{ele.content}</p>
                                <span>{ele.created_at}</span>
                              </div>
                              <ul className="like_box">
                                <li>
                                  <img alt="like" src="/images/star.svg" />
                                </li>
                                <li>
                                  <img alt="like" src="/images/star.svg" />
                                </li>
                                <li>
                                  <img alt="like" src="/images/star.svg" />
                                </li>
                              </ul>
                            </div>
                          </li>
                        );
                      })}
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
      </div>
    );
  }
}

export default Contentlist;
