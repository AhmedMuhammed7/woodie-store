import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import PropTypes from "prop-types";
import { PUSH } from "../../Reducers/Reducers";
import StarWidget from "../StartWidget/StarWidget";
import Axios from "../../Utils/Axios";
import "./Product.scss";

const Product = ({ product, cartDispatch }) => {
  const { _id, name, thumbnail, price, rates, TotalRates } = product;
  const handelAddCart = () => {
    Axios.post("http://localhost:4000/api/carts/add-to", {
      userId: Cookies.getJSON("user").id,
      product,
    })
      .then((res) => res.data)
      .then((data) => {
        cartDispatch({ type: PUSH, payload: data });
      });
  };
  return (
    <div className="product text-center py-4 px-3 position-relative overflow-hidden d-flex flex-column justify-content-center">
      <div className="overlay position-absolute w-100 h-100 d-flex justify-content-center align-items-center">
        <NavLink exact to={`/collections/${_id}`}>
          <i className="fa fa-link"></i>
        </NavLink>
        <button className="border-0" onClick={handelAddCart}>
          <i className="fa fa-shopping-cart"></i>
        </button>
      </div>
      <div className="image h-75">
        <img
          src={`http://localhost:4000/uploads/${thumbnail}`}
          alt="not found"
          className="w-100 h-100"
        />
      </div>
      <h5 className="fw-bold my-1">{name || "fucken chair"}</h5>
      <StarWidget length={rates.length} Total={TotalRates} align="center"/>
      <div className="price mt-1 fw-bold">$ {price || 1}.00</div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  cartDispatch: PropTypes.func.isRequired,
};
export default Product;
