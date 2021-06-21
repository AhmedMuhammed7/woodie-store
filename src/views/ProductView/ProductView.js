import { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import chair from "../../assets/armchair.svg";
import StarWidget from "../../components/StartWidget/StarWidget";
import Loading from "../../components/Loading/Loading";
import Button from "../../components/Button";
import Reviews from "../../components/Reviews";
import "./ProductView.scss";
import Axios from "../../Utils/Axios";
import axios from "axios";
import Carousel from "../../components/Carousel";
const ProductView = ({ cartDispatch }) => {
  const user = Cookies.getJSON("user");
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const { name, images, amount, price, TotalRates, rates, thumbnail, _id } =
    product ? product : {};

  const handleAddToCart = () => {
    Axios.post("/carts/add-to", {
      userId: user.id,
      product: {
        thumbnail,
        name,
        price,
        amount,
        _id,
      },
    }).then((res) => cartDispatch({ type: "PUSH", payload: res.data }));
  };

  useEffect(() => {
    const productCancel = axios.CancelToken.source();
    Axios.get(`/products/${id}`, { cancelToken: productCancel.token })
      .then((res) => res.data)
      .then((data) => setProduct(data))
      .catch((err) => err);
    return () => {
      productCancel.cancel();
    };
  }, [id]);

  return product ? (
    <div id="product">
      <div className="container">
        <div className="row mt-5">
          <Carousel images={images}/>
          <div className="col-lg-5 text">
            <h2 className="fw-bold">{name}</h2>
            <div className="info mt-4">
              The model is highly accurate original dimensions & data.
            </div>
            <p className="mt-3">
              <i className="fa fa-dollar me-1"></i>
              {price}.00
            </p>
            <StarWidget Total={TotalRates} length={rates.length} align="end" />
            <div className="amount">
              <img src={chair} alt="not found" className="me-2" />
              {amount}
            </div>
            <Button
              text="Add to cart"
              className="user-btn"
              clicking={handleAddToCart}
              type="button"
            />
          </div>
        </div>
        <Reviews rates={rates} />
      </div>
    </div>
  ) : (
    <div
      style={{ height: window.innerHeight - 100 + "px" }}
      className=" d-flex justify-content-center align-items-center "
    >
      <Loading size={1} />
    </div>
  );
};
export default ProductView;

ProductView.propTypes = {
  cartDispatch: PropTypes.func
};