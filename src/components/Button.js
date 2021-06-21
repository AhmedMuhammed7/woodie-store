import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({ className, text, type, path, clicking }) => (
  <button className={`my-2 mx-auto ${className}`} type={type} onClick={clicking || null}>
    {path ? <Link to={path} className="link-light">{text}</Link> : text}
  </button>
);

Button.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  path: PropTypes.string,
  clicking : PropTypes.func,
};

export default Button;
