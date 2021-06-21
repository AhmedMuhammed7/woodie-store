import PropTypes from 'prop-types'
import "./Header.scss";
const Header = ({ text }) => (
  <header
    className="d-flex align-items-center px-5 mb-5"
    style={{ height: `${window.innerHeight / 1.6}px` }}
  >
    <h2 className="fw-bold">{text || "Not found"}</h2>
  </header>
);

Header.propTypes = {
  text : PropTypes.string.isRequired
}
export default Header;
