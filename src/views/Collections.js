import PropTypes, { object } from 'prop-types'
import Header from "../components/Header/Header";
import Products from "../components/Products";
import Footer from "../components/Footer/Footer";

const Collections = ({ products, cartDispatch }) => (
  <div>
    <Header text="Collections" />
    <div className="container">
      {products.length >= 1 ? (
        <Products products={products} cartDispatch={cartDispatch} />
      ) : (
        <div className="m-5">No Products Exists</div>
      )}
    </div>
    <Footer />
  </div>
);

Collections.propTypes = {
  products: PropTypes.arrayOf(object).isRequired,
  cartDispatch : PropTypes.func.isRequired
};

export default Collections;
