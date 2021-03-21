import React from 'react';
import './Details.scss';
import '../../Styles/Common.scss';
import Headline from './Components/Headline/Headline';
import Contentlist from './Components/Contentlist/Contentlist';
import Reservation from './Components/Reservation/Reservation';
import Footer from '../Main/Components/Footer/Footer';

class Details extends React.Component {
  state = {
    detailsData: [],
    detailsReservationData: [],
    detailsReviewData: [],
  };

  componentDidMount() {
    console.log('컨디마실행');
    this.getSpaceData();
    this.getSpaceReviewData();
  }

  componentDidUpdate(prevProps, _) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getSpaceData();
      this.getSpaceReviewData();
    }
  }

  getSpaceData = () => {
    fetch('/data/Details.json')
      .then(res => res.json())
      .then(res =>
        this.setState({
          detailsData: res.main[0],
          detailsReservationData: res.detail,
        })
      );
  };
  // `http://15.164.219.219:8000/spaces/${this.props.match.params.id}`
  // `http://15.164.219.219:8000/reviews/${this.props.match.params.id}`
  getSpaceReviewData = () => {
    fetch('/data/DetailsReview.json')
      .then(res => res.json())
      .then(res => this.setState({ detailsReviewData: res.review_data }));
  };

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
    const {
      detailsData,
      detailsReviewData,
      detailsReservationData,
    } = this.state;

    return (
      <div className="Details">
        <main className="detail_wraper">
          <section className="left">
            <Headline detailsData={detailsData} />
            <Contentlist
              detailsData={detailsData}
              detailsReviewData={detailsReviewData}
            />
          </section>
          <Reservation detailsReservationData={detailsReservationData} />
        </main>
      </div>
    );
  }
}

export default Details;
