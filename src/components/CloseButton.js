import PropTypes from "prop-types";

const CloseButton = ({ removeFunc }) => (
  <button
    className="position-absolute border-0 top-0 end-0 color-light"
    style={{ background: "none" }}
    onClick={removeFunc}
  >
    <i className="fa fa-close"></i>
  </button>
);

CloseButton.propTypes = {
  removeFunc: PropTypes.func.isRequired,
};

export default CloseButton;
