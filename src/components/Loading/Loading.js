import PropTypes from "prop-types";
import "./Loading.scss";
const Loading = ({ size }) => (
  <div
    className={`loader loader-x${size && +size <= 4 && +size >= 1 ? +size : 1}`}
  ></div>
);
Loading.propTypes = {
  size: PropTypes.number.isRequired,
};
export default Loading;
