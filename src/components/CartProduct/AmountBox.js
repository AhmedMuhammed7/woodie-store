import axios from "axios";
import { curry } from "../../Utils/FP";
import Axios from "../../Utils/Axios";
const AmountBox = ({
  amount,
  cartDispatch,
  setWarningMessage,
  id,
  index,
  productAmount,
}) => {
  const handelAmountToggle = (id, index, type, amount) => {
    const amountCancelToken = axios.CancelToken.source();
    Axios.put(
      "carts/amount",
      {
        type,
        id,
      },
      { cancelToken: amountCancelToken.token }
    )
      .then((res) => res.data)
      .then((data) => {
        cartDispatch({
          type: `${
            amount > 1 ? "MODIFAY" : type !== "down" ? "MODIFAY" : "REMOVE"
          }`,
          payload: { index, data },
        });
      })
      .catch((err) => err);
      setWarningMessage(
        amount === productAmount && type === "up"
          ? `There is only ${amount} products`
          : null
      );
      if (amount === productAmount && type === "up") amountCancelToken.cancel();
  };

  const carriedToggle = curry(handelAmountToggle);
  return (
    <div className="col-md-2 fw-bold  my-2 amount d-flex justify-content-center">
      <div className="w-50  py-1 d-flex border">
        <div className="w-50 d-flex justify-content-center align-items-center">
          {amount}
        </div>
        <div className="d-flex flex-column w-50">
          <button
            className="border-0 up"
            onClick={() => carriedToggle(id)(index)("up")(amount)}
          >
            <i className="fa fa-caret-up"></i>
          </button>
          <button
            className="border-0 down"
            onClick={() => carriedToggle(id)(index)("down")(amount)}
          >
            <i className="fa fa-caret-down"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AmountBox;
