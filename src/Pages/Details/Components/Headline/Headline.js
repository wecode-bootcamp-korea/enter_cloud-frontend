import React from 'react';
import './Headline.scss';

class Headline extends React.Component {
  constructor() {
    super();
    this.state = {
      headData: [],
    };
  }

  componentDidMount() {
    fetch('http://10.58.4.13:8000/spaces/1')
      .then(data => data.json())
      .then(data => this.setState({ headData: data.main[0] }));
  }

  render() {
    const { name, simple_information, main_image, tags } = this.state.headData;
    return (
      <section className="Headline">
        <div className="headlineSpace">
          <h2>{name}</h2>
          <p>{simple_information}</p>
          <ul>
            {tags &&
              tags.map(tag => {
                return <li key={tag.id}>{tag}</li>;
              })}
          </ul>
          <img alt="사진1" src={main_image} />
          <div className="textBox">
            <h3>{simple_information}</h3>
          </div>
        </div>
      </section>
    );
  }
}

export default Headline;
