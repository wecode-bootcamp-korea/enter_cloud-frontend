import React from 'react';
import './Details.scss';
import '../../Styles/Common.scss';
import Headline from './Components/Headline/Headline';
import Contentlist from './Components/Contentlist/Contentlist';
import Reservation from './Components/Reservation/Reservation';
import Nav from '../../Components/Nav/Nav';

class Details extends React.Component {
  state = {
    data: {},
  };

  componentDidMount() {
    fetch(`http://10.58.4.13:8000/spaces/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(res => this.setState({ data: res }));

    fetch(`http://10.58.4.13:8000/reviews/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(res => this.setState({ data: res }));
  }

  componentDidUpdate(prevProps, _) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      fetch(`http://10.58.4.13:8000/spaces/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(res => this.setState({ data: res }));

      fetch(`http://10.58.4.13:8000/reviews/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(res => this.setState({ data: res }));
    }
  }

  goTOMainPage = () => {
    this.props.history.push('/');
  };

  goTOPreviousPage = () => {
    this.props.history.push(`/Details/${this.props.match.params.id - 1}`);
  };

  goTONextPage = () => {
    this.props.history.push(
      `/Details/${Number(this.props.match.params.id) + 1}`
    );
  };

  render() {
    console.log(this.props);
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
