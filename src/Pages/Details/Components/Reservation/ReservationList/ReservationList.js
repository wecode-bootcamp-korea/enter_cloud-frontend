import React from 'react';
import './ReservationList.scss';

class ReservationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      detailsReservationData,
      buttonOption,
      handleOptionChange,
      decreasePeopleCount,
      peopleCount,
      increasePeopleCount,
    } = this.props;
    return (
      <ul className="reservation_list">
        {detailsReservationData &&
          detailsReservationData.map(ele => {
            const isChecked = ele.id === Number(buttonOption);
            // 위에줄 typeOf 확인
            console.log('여기가 확인', isChecked, typeof ele.id);
            return (
              <li>
                <div className="flex_box">
                  <label className="list_cost">
                    <input
                      type="radio"
                      value={ele.id}
                      checked={isChecked}
                      onChange={handleOptionChange}
                    />
                    {ele.name}
                  </label>
                  <div className="list_subject">
                    <p>₩{ele.price}</p>
                  </div>
                </div>
                {isChecked && (
                  <div className="reservation_detail">
                    <img alt="hostphoto" src={ele.image} />
                    <p>{ele.information}</p>
                    <ul>
                      <li>
                        <span className="room_style">공간유형</span>
                        {ele.types &&
                          ele.types.map(type => {
                            return <span className="room_data">{type} </span>;
                          })}
                      </li>
                      <li>
                        <span className="room_style">예약시간</span>
                        <span className="room_data">
                          최소 {ele.min_reservation_time}시간 부터
                        </span>
                      </li>
                      <li>
                        <span className="room_style">수용인원</span>
                        <span className="room_data">
                          최소 {ele.min_people}명 ~ 최대 {ele.max_people}명
                        </span>
                      </li>
                    </ul>
                    <div className="facility_wrap">
                      <ul className="facility_list">
                        {ele.facilities.map(data => (
                          <li key={data.id}>
                            <i className={data.type}></i>
                            <span>{data.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="reservation_total">
                      <div className="total_text">
                        <h3>총 예약인원</h3>
                        <span>(최대 {ele.max_people}명)</span>
                      </div>
                      <div className="total_sum">
                        <button
                          className="click_minus"
                          onClick={decreasePeopleCount}
                        >
                          <i className="minus" />
                        </button>
                        <span>{peopleCount}</span>
                        <button
                          className="click_plus"
                          onClick={() => increasePeopleCount(ele.max_people)}
                        >
                          <i className="plus" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
      </ul>
    );
  }
}

export default ReservationList;
