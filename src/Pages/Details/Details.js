import React from 'react';
import './Details.scss';
import '../../Styles/Common.scss';
import Headline from './Components/Headline/Headline';
import Contentlist from './Components/Contentlist/Contentlist';
import Reservation from './Components/Reservation/Reservation';
import Nav from '../../Components/Nav/Nav';

class Details extends React.Component {
  render() {
    return (
      <div className="Details">
        <Nav />
        <main className="detail_wraper">
          <section className="left">
            <Headline />
            <Contentlist />
          </section>
          <Reservation />
        </main>
      </div>
    );
  }
}

export default Details;
