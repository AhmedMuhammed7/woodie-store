import { useEffect, useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import Cookies from "js-cookie";
import { decodedToken } from "../Utils/HandelToken";
import UserNavbar from "../components/Navbars/UserNavbar/UserNavbar";
import Axios from "../Utils/Axios";
import { GlobalReducer, CartReducer, SET } from "../Reducers/Reducers";
import Home from "./Home";
import Collections from "./Collections";
import ProjectsView from "./ProjectsView";
import ServicesView from "./ServicesView";
import ProductView from "./ProductView/ProductView";
import Contact from './Contact/Contact'
import About from "./About";
import Cart from "./Cart/Cart";
const Authenticated = ({ setIsValidToken }) => {
  const [cart, cartDispatch] = useReducer(CartReducer, []);
  const [products, productsDispatch] = useReducer(GlobalReducer, []);
  const [projects, projectsDispatch] = useReducer(GlobalReducer, []);
  const [services, servicesDispatch] = useReducer(GlobalReducer, []);

  useEffect(() => {
    const handelBodyStyle = () => {
      const nav = document.querySelector("nav");
      document.body.style.paddingTop = nav ? `${nav.clientHeight}px` : "";
    };

    const productsCancelToken = axios.CancelToken.source();
    Axios.get("/products", { cancelToken: productsCancelToken.token })
      .then((res) => res.data)
      .then((data) => {
        productsDispatch({ type: SET, payload: data });
      })
      .catch((e) => e);

    const servicesCancelToken = axios.CancelToken.source();
    Axios.get("/services", { cancelToken: servicesCancelToken.token })
      .then((res) => res.data)
      .then((data) => {
        servicesDispatch({ type: SET, payload: data });
      })
      .catch((e) => e);

    const projectsCancelToken = axios.CancelToken.source();
    Axios.get("/projects", { cancelToken: projectsCancelToken.token })
      .then((res) => res.data)
      .then((data) => {
        projectsDispatch({ type: SET, payload: data });
      })
      .catch((e) => e);

    const cartCancelToken = axios.CancelToken.source();
    Axios.get(`/carts/${decodedToken.id}`, {
      cancelToken: cartCancelToken.token,
    })
      .then((res) => res.data)
      .then((data) => {
        cartDispatch({ type: SET, payload: data });
      })
      .catch((e) => e);

    const userCancelToken = axios.CancelToken.source();
    Axios.get(`/users/user/${decodedToken.id}`, {
      cancelToken: userCancelToken.token,
    })
      .then((res) => res.data)
      .then((data) => {
        Cookies.set("user", JSON.stringify(data.body));
      })
      .catch((e) => e);

    handelBodyStyle();
    return () => {
      document.body.style.paddingTop = "0";
      productsCancelToken.cancel("canceled");
      servicesCancelToken.cancel("canceled");
      projectsCancelToken.cancel("canceled");
      cartCancelToken.cancel("canceled");
      userCancelToken.cancel("canceled");
    };
  }, []);
  return (
    <div>
      <Router>
        <UserNavbar
          cartLength={cart.length}
          setIsValidToken={setIsValidToken}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                products={products.filter((products, index) => index < 8)}
                services={services}
                project={projects[0] ? projects[0] : {}}
                cartDispatch={cartDispatch}
              />
            )}
          />
          <Route
            exact
            path="/collections"
            render={() => (
              <Collections products={products} cartDispatch={cartDispatch} />
            )}
          />
          <Route
            exact
            path="/projects"
            render={() => <ProjectsView projects={projects} />}
          />
          <Route
            exact
            path="/services"
            render={() => <ServicesView services={services} />}
          />
          <Route exact path="/contact" render={() => <Contact />} />
          <Route
            exact
            path="/about"
            render={() => <About project={projects[0] ? projects[0] : {}} />}
          />
          <Route
            exact
            path="/cart"
            render={() => <Cart cart={cart} cartDispatch={cartDispatch} />}
          />
          <Route
            exact
            path="/collections/:id"
            render={() => <ProductView products={products} cartDispatch={cartDispatch} />}
          />
        </Switch>
      </Router>
    </div>
  );
};
Authenticated.propTypes = {
  setIsValidToken: PropTypes.func,
};
export default Authenticated;
