import PropTypes from "prop-types";
import "./Service.scss";

const Service = ({ name, icon, description }) => (
  <div className="service p-5">
    <div className="icon mb-4">
      <img src={`http://localhost:4000/uploads/${icon}`} alt="not found" />
    </div>
    <h4 className="fw-bold">{name}</h4>
    <p className="mt-3">{description}</p>
  </div>
);

Service.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Service;
