import PropTypes from 'prop-types'
import Review from "./Review";
const Reviews = ({ rates }) => (
  <div className="row">
    {rates.map((rate, index) => (
      <div className="col-lg-12 my-2" key={index}>
        <Review rate={rate} />
      </div>
    ))}
  </div>
);

Reviews.propTypes = {
  rates: PropTypes.arrayOf(PropTypes.object),
};
export default Reviews;
