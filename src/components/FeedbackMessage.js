import PropTypes from "prop-types";
const FeedbackMessage = ({ type, feedback }) => (
  <div className={`alert alert-${type} w-100`} role="alert">
    {feedback}
  </div>
);

FeedbackMessage.propTypes = {
  type: PropTypes.string.isRequired,
  feedback: PropTypes.string.isRequired,
};
export default FeedbackMessage;