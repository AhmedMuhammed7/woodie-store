import PropTypes from "prop-types";
import Service from "./Service/Service";

const Services = ({ services }) => (
  <div className="row mt-5">
    {services.map((service) => (
      <div className="col-lg-4 col-md-6 mb-4" key={service._id}>
        <Service
          name={service.name}
          description={service.description}
          icon={service.icon}
          key={service._id}
        />
      </div>
    ))}
  </div>
);

Service.propTypes = {
  services: PropTypes.arrayOf(PropTypes.object),
};

export default Services;
