import { useHistory } from "react-router";
import PropTypes from 'prop-types'
import Cookies from "js-cookie";

const Logout = ({ setIsValidToken }) => {
  const history = useHistory();
  
  const handelLogout = () => {
    Cookies.remove("token");
    Cookies.remove("user");
    history.push("/login");
    setIsValidToken(false);
  };
  return (
    <button className="border-0" onClick={handelLogout}>
      <i className="fa fa-sign-out link-light"></i>
    </button>
  );
};

Logout.propTypes = {
  setIsValidToken : PropTypes.func.isRequired
};

export default Logout;
