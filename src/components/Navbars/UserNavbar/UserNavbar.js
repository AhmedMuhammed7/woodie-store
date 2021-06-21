import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Logout from "../../Logout";
import NavLinks from "./NavLinks";
import image from "../../../assets/logo.png";
import "./UserNavbar.scss";
const Nav = ({ cartLength, setIsValidToken }) => {
  const [navBtn, setNavBtn] = useState();
  const handelToggle = () => {
    if (window.innerWidth < 992) navBtn.click();
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={image} alt="not found" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          ref={(newRef) => setNavBtn(newRef)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavLinks handelToggle={handelToggle} />
          <div className="cart pt-2 position-relative me-5">
            <Link to="/cart" onClick={handelToggle}>
              <i className="fa fa-shopping-bag"></i>
            </Link>
            <div className="position-absolute amount text-center">
              {cartLength}
            </div>
          </div>
          <div className="pt-2">
            <Logout setIsValidToken={setIsValidToken} />
          </div>
        </div>
      </div>
    </nav>
  );
};

Nav.propType = {
  cartLength: PropTypes.number.isRequired,
  setIsValidToken: PropTypes.func.isRequired,
};

export default Nav;
