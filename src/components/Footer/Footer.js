import logo from "../../assets/logo.png";
import SocialLinks from "../SocialLinks/SocialLinks";
import "./Footer.scss";
const Footer = () => (
  <footer className="py-5">
    <div className="container">
      <form className="d-flex justify-content-between">
        <input type="email" placeholder="email" className="w-75 border-0" />
        <button type="submit">Subscribe</button>
      </form>
      <div className="content d-flex justify-content-between my-5">
        <div className="logo">
          <img src={logo} alt="not found" />
        </div>
        <p className="fw-bold mt-3">
          All rights reserved to #WPDeveloper 2020.
        </p>
        <SocialLinks type="simple"/>
      </div>
    </div>
  </footer>
);

export default Footer;
