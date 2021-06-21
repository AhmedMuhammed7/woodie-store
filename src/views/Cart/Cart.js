import { useState } from "react";
import PropTypes from 'prop-types'
import CartProduct from "../../components/CartProduct/CartProduct";
import FeedbackMessage from "../../components/FeedbackMessage";
import "./Cart.scss";
const Cart = ({ cartDispatch, cart }) => {
  const [warningMessage, setWarningMessage] = useState(null);

  return (
    <div className="cart pt-5">
      <div className="container ">
        <h2 className="py-3 big-head-1">Cart</h2>
        {warningMessage && (
          <FeedbackMessage feedback={warningMessage} type="warning" />
        )}
        <div className="cart-head p-4">
          <div className="row m-0 text-center">
            <div className="col-md-1 fw-bold"></div>
            <div className="col-md-1 fw-bold"></div>
            <div className="col-md-3 fw-bold">Product name</div>
            <div className="col-md-2 fw-bold">Price</div>
            <div className="col-md-2 fw-bold">Amount</div>
            <div className="col-md-2 fw-bold">Total</div>
          </div>
        </div>

        {cart.length >= 1 ? (
          cart.map((singelCart, index) => (
            <CartProduct
              setWarningMessage={setWarningMessage}
              info={singelCart}
              key={singelCart._id}
              index={index}
              cartDispatch={cartDispatch}
            />
          ))
        ) : (
          <div>Cart is Empty</div>
        )}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart : PropTypes.array,
  cartDispatch : PropTypes.func
}
export default Cart;
