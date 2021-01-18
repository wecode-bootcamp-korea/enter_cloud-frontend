import React from 'react';
import './Headlineson.scss';

class Headlineson extends React.Component {
  render() {
    console.log(this.props.list);
    return (
      <>
        <section className="left">
          <div className="left_space">
            <h2>{this.props.list.title}</h2>
            <p>{this.props.list.subject}</p>
            <ul>
              <li>#깔끔한 연습실</li>
            </ul>
            <img alt="사진1" src={this.props.list.img} />
            <div className="text_box">
              <h3>신사동 가로수길 2층에 위치한 햇살 좋은 공간</h3>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Headlineson;

// {this.state.HeadData.map((list, index) => {
//   return <Headlineson id={index} list={list} />;
// })}
