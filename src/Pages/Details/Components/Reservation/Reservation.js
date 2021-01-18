import React from 'react';
import { acceptData } from './ReservationData';
import './Reservation.scss';

class Reservation extends React.Component {
  constructor() {
    super();
    this.state = {
      ReservationData: [],
      peopleCount: 1,
    };
  }

  componentDidMount() {
    fetch('/data/Deatils.json')
      .then(data => data.json())
      .then(data => this.setState({ ReservationData: data[0].rightData }));
  }
  render() {
    const {
      roomType,
      img,
      introduction,
      spacetype,
      mintime,
      capacity,
      icon,
      maxCapacity,
    } = this.state.ReservationData;
    console.log({ roomType, introduction });
    return (
      <>
        <section className="right">
          <div className="reservation_head">
            <p>세부공간 선택</p>
            <a className="icon_space" href="/">
              <img className="icon_upload" alt="" src="./images/upload.svg" />
            </a>
            <a href="/">
              <img className="icon_heart" alt="" src="./images/heart.svg" />
            </a>
          </div>
          <div className="reservation_body">
            <div className="reservation_text">
              <p>
                호스트의 승인을 기다릴 필요 없이 <br></br>지금 바로 예약하세요!
              </p>
            </div>
            <ul className="reservation_list">
              {roomType &&
                roomType.map((ele, idx) => {
                  return (
                    <li key={idx}>
                      <div className="flex_box">
                        <div className="list_cost">
                          <input type="radio" />
                          <p>{ele}</p>
                        </div>
                        <div className="list_subject">
                          <p>{ele}</p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              <li>
                <div className="flex_box">
                  <div className="list_cost">
                    <input type="radio" />
                    <p>hi</p>
                  </div>
                  <div className="list_subject">
                    <p>₩30,3000원</p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="reservation_detail">
              <img alt="hostphoto" src={img} />
              <p>{introduction}</p>
              <ul>
                <li>
                  <span className="room_style">공간유형</span>
                  <span className="room_data">촬영스튜디오</span>
                </li>
                <li>
                  <span className="room_style">예약시간</span>
                  <span className="room_data">최소 2시간 부터</span>
                </li>
                <li>
                  <span className="room_style">수용인원</span>
                  <span className="room_data">최소 4명 ~ 최대 6명</span>
                </li>
                {/* 컴포넌트화시키기 */}
              </ul>
              <div className="facility_wrap">
                <ul className="facility_list">
                  {acceptData.map(data => (
                    <li key={data.id}>
                      <i className={data.type}></i>
                      <span>{data.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="reservation_total">
                <div className="total_text">
                  <h3>총 예약인원</h3>
                  <span>(최대 10명 , 4명 초과시 5,500원/인)</span>
                </div>
                <div className="total_sum">
                  <button
                    className="click_minus"
                    onClick={() => {
                      this.setState({
                        peopleCount: this.state.peopleCount - 1,
                      });
                    }}
                  >
                    <i className="minus"></i>
                  </button>
                  <span>
                    <input
                      type="number"
                      value={this.state.peopleCount}
                      onChange={e => {
                        this.setState({ peopleCount: e.target.value });
                      }}
                    />
                  </span>
                  <button
                    className="click_plus"
                    onClick={() => {
                      this.setState({
                        peopleCount: this.state.peopleCount + 1,
                      });
                    }}
                  >
                    <i className="plus"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="reservation_button">
              <img alt="call" src="./images/phone-call.svg"></img>
              <button className="reservation_call">전화</button>
              <button className="reservation_now">바로 예약하기</button>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Reservation;
