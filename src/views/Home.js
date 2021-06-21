import PropTypes from "prop-types";
import Products from "../components/Products";
import Project from "../components/Project/Project";
import Services from "../components/Services";
import Footer from "../components/Footer/Footer";
import { WithHeads } from "../Utils/HOC";

const ProductsWithHeads =
  WithHeads(Products)("Featured")("Collection")("collections")("center");

const ServicesWithHeads =
  WithHeads(Services)("What We Do")("OUR SERVICES")("services")("center");

const ProjectWithHeads =
  WithHeads(Project)("Portfolio")("OUR PROJECTS")("projects")("center");

const Home = ({ products, services, project, cartDispatch }) => (
  <div className="home">
    <ProductsWithHeads products={products} cartDispatch={cartDispatch} />
    <ServicesWithHeads
      services={services.filter((service, index) => index < 6)}
    />
    <ProjectWithHeads project={project} />
    <Footer />
  </div>
);

Home.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  services: PropTypes.arrayOf(PropTypes.object).isRequired,
  project: PropTypes.object.isRequired,

  cartDispatch: PropTypes.func.isRequired,
};
export default Home;
