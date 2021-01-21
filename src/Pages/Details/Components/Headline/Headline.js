import React from 'react';
import './Headline.scss';

class Headline extends React.Component {
  render() {
    const {
      name,
      simple_information,
      tags,
      main_image,
    } = this.props.detailsData;
    console.log(this.props.detailsData);
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
