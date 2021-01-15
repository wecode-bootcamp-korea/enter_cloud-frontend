import React from 'react';
import './Headline.scss';

class Headline extends React.Component {
  constructor() {
    super();
    this.state = {
      HeadData: [],
    };
  }

  componentDidMount() {
    fetch('/data/Details.json')
      .then(data => data.json())
      .then(data => this.setState({ HeadData: data[0].leftData }));
  }

  render() {
    console.log(this.state.HeadData.tags);
    return (
      <>
        <section className="left">
          <div className="left_space">
            <h2>{this.state.HeadData.title}</h2>
            <p>{this.state.HeadData.subject}</p>
            <ul>
              {this.state.HeadData.tags &&
                this.state.HeadData.tags.map(tags => {
                  return <li>{tags}</li>;
                })}
            </ul>
            <img alt="사진1" src={this.state.HeadData.img} />
            <div className="text_box">
              <h3>{this.state.HeadData.subject}</h3>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Headline;

// {this.state.HeadData.map(list => {
//   return <Headlineson list={list} />;
// })}
