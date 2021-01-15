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
    const { title, subject, tags, img } = this.state.HeadData;
    return (
      <>
        <section className="left">
          <div className="left_space">
            <h2>{title}</h2>
            <p>{subject}</p>
            <ul>
              {tags &&
                tags.map(tags => {
                  return <li>#{tags}</li>;
                })}
            </ul>
            <img alt="사진1" src={img} />
            <div className="text_box">
              <h3>{subject}</h3>
            </div>
          </div>
        </section>
      </>
    );
  }
}
// key={tags.toString()
export default Headline;

// {this.state.HeadData.map(list => {
//   return <Headlineson list={list} />;
// })}
