import React from 'react';
import './Reservation.scss';

class Reservation extends React.Component {
  render() {
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
              <li>
                <div className="flex_box">
                  <img alt="select" src="/images/empty.svg" />
                  <div className="list_cost">
                    <p>A형룸 202호(최대6인)낮타임</p>
                  </div>
                  <div className="list_subject">
                    <p></p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="reservation_detail">
              <img
                alt="hostphoto"
                src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/117695455_303895957724855_8135055200715456199_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=S2wPguRXnCwAX-EWHMR&tp=1&oh=f146edea232a56224dba39d5e493a072&oe=60161C13"
              />
              <p>유리로 된 천장의 오픈감을 느낄수 있는 룸입니다.</p>
              <ul>
                <li>
                  <span className="room_style">공간유형</span>
                  <span className="room_data">촬영스튜디오</span>
                </li>
                {/* 컴포넌트화시키기 */}
                <li>
                  <span className="room_style">공간유형</span>
                  <span className="room_data">촬영스튜디오</span>
                </li>
                <li>
                  <span className="room_style">공간유형</span>
                  <span className="room_data">촬영스튜디오</span>
                </li>
                <li>
                  <span className="room_style">공간유형</span>
                  <span className="room_data">촬영스튜디오</span>
                </li>
              </ul>
              <div className="reservation_total">
                <div className="total_text">
                  <h3>총 예약인원</h3>
                  <span>(최대 10명 , 4명 초과시 5,500원/인)</span>
                </div>
                <div className="total_sum">
                  <a href="/">11</a>
                  <span>1</span>
                  <a href="/">11</a>
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
