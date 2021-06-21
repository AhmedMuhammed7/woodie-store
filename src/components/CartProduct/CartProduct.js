import "./CartProduct.scss";
import AmountBox from "./AmountBox";
import DeleteBen from "./DeleteBen.js";
const CartProduct = ({ info, setWarningMessage, cartDispatch, index }) => {
  const { name, price, amount, thumbnail } = info.product;

  return (
    <div className="product-table border p-4 mb-3">
      <div className="row align-items-center text-center">
        <DeleteBen
          setWarningMessage={setWarningMessage}
          cartDispatch={cartDispatch}
          index={index}
          id={info._id}
        />
        <div className="col-md-1 my-3">
          <img
            src={`http://localhost:4000/uploads/${thumbnail}`}
            className="w-50"
            alt="not found"
          ></img>
        </div>
        <div className="col-md-3 fw-bold my-2">{name}</div>
        <div className="col-md-2 fw-bold my-2">{price}.00 $ </div>
        <AmountBox
          amount={info.amount}
          productAmount={amount}
          setWarningMessage={setWarningMessage}
          cartDispatch={cartDispatch}
          id={info._id}
          index={index}
        />
        <div className="col-md-2 fw-bold  my-2">
          <p className="total">Total</p>
          {price * info.amount}.00 $
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
