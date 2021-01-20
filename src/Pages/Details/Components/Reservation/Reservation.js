import React from 'react';
import './Reservation.scss';
import ReservationList from './ReservationList/ReservationList';

class Reservation extends React.Component {
  constructor() {
    super();
    this.state = {
      acceptData: [],
      reservationData: [],
      peopleCount: 1,
      buttonOption: 0,
    };
  }

  increasePeopleCount = maxPeople => {
    console.log(maxPeople);
    if (this.state.peopleCount >= maxPeople) {
      return null;
    }
    this.setState({ peopleCount: this.state.peopleCount + 1 });
  };

  decreasePeopleCount = () => {
    if (this.state.peopleCount <= 1) {
      return null;
    }
    this.setState({ peopleCount: this.state.peopleCount - 1 });
  };
  //동치와 일치
  handleOptionChange = e => {
    this.setState({ buttonOption: e.target.value, peopleCount: 1 });
  };
  componentDidMount() {
    fetch('http://10.58.4.13:8000/spaces/1')
      .then(res => res.json())
      .then(res =>
        this.setState({
          reservationData: res.detail,
        })
      );
  }

  render() {
    const { reservationData, buttonOption, peopleCount } = this.state;
    const {
      handleOptionChange,
      decreasePeopleCount,
      increasePeopleCount,
    } = this;
    // console.log('testtest>>> ', this.state.reservationData);
    console.log(typeof this.state.buttonOption);
    return (
      <section className="Reservation">
        <div className="reservation_head">
          <p>세부공간 선택</p>
          <a className="icon_space" href="/">
            <img
              className="icon_upload"
              alt="upload"
              src="./images/upload.svg"
            />
          </a>
          <a href="/">
            <img className="icon_heart" alt="heart" src="./images/heart.svg" />
          </a>
        </div>
        <div className="reservation_body">
          <div className="reservation_text">
            <p>
              호스트의 승인을 기다릴 필요 없이 <br></br>지금 바로 예약하세요!
            </p>
          </div>
          <ReservationList
            reservationData={reservationData}
            buttonOption={buttonOption}
            handleOptionChange={handleOptionChange}
            decreasePeopleCount={decreasePeopleCount}
            peopleCount={peopleCount}
            increasePeopleCount={increasePeopleCount}
          />
        </div>
        <div className="reservation_button">
          <img alt="call" src="./images/phone-call.svg" />
          <button className="call">전화</button>
          <button className="now">바로 예약하기</button>
        </div>
      </section>
    );
  }
}

export default Reservation;
