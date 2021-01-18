import React from 'react';
import { acceptData } from './ReservationData';
import './Reservation.scss';

class Reservation extends React.Component {
  constructor() {
    super();
    this.state = {
      acceptData: [],
      reservationData: [],
      peopleCount: 1,
    };
  }

  componentDidMount() {
    fetch('/data/Deatils.json')
      .then(data => data.json())
      .then(data =>
        this.setState({ reservationData: data.detail[0] }, () =>
          console.log('test >>> ', this.state.reservationData)
        )
      );
  }

  render() {
    const {
      name,
      price,
      image,
      information,
      types,
      min_reservation_time,
      min_people,
      max_people,
      facilities,
    } = this.state.reservationData;
    console.log('testtest>>> ', this.state.reservationData);
    return (
      <section className="Reservation">
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
            <li>
              <div className="flex_box">
                <div className="list_cost">
                  <input type="radio" />
                  <p>{name}</p>
                </div>
                <div className="list_subject">
                  <p>{price}</p>
                </div>
              </div>
              <div className="reservation_detail">
                <img alt="hostphoto" src={image} />
                <p>{information}</p>
                <ul>
                  <li>
                    <span className="room_style">공간유형</span>
                    {types &&
                      types.map(type => {
                        return <span className="room_data">{type}</span>;
                      })}
                  </li>
                  <li>
                    <span className="room_style">예약시간</span>
                    <span className="room_data">
                      최소 {min_reservation_time}시간 부터
                    </span>
                  </li>
                  <li>
                    <span className="room_style">수용인원</span>
                    <span className="room_data">
                      최소 {min_people}명 ~ 최대 {max_people}명
                    </span>
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
                    <span>(최대 {max_people}명</span>
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
            </li>
          </ul>
        </div>
        <div className="reservation_button">
          <img alt="call" src="./images/phone-call.svg"></img>
          <button className="call">전화</button>
          <button className="now">바로 예약하기</button>
        </div>
      </section>
    );
  }
}

export default Reservation;
