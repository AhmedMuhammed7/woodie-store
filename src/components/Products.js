import PropTypes from "prop-types";
import Product from "./Product/Product";
const Products = ({ products, cartDispatch }) => (
  <div className="row">
    {products.map((product) => (
      <div className="col-lg-3 col-md-6 mb-3" key={product._id}>
        <Product product={product} cartDispatch={cartDispatch} />
      </div>
    ))}
  </div>
);
Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  cartDispatch: PropTypes.func.isRequired,
};
export default Products;
