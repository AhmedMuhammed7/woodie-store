import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const LandingNav = () => (
  <nav className="fixed-top py-2" style={{ background: "#0e1630" }}>
    <div className="container d-flex justify-content-between align-items-center">
      <div className="logo ">
        <Link to="/">
          {" "}
          <img src={logo} alt="not found" />
        </Link>
      </div>
      <ul className="d-flex py-2 align-items-center  m-0">
        <li className="px-2">
          <Link to="/sign-up" className="link-light">
            Sign up
          </Link>
        </li>
        <li className="px-2">
          <Link to="/login" className="link-light">
            Login
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default LandingNav;
