import PropTypes, { object } from 'prop-types'
import Header from '../components/Header/Header'
import Services from '../components/Services'
import Footer from '../components/Footer/Footer'
const ServicesView = ({ services }) => {
  return (
    <div>
      <Header text="Services" />
      <div className="container">
        {services.length >= 1 ? (
          <Services services={services} />
        ) : (
          <div className="m-5">No Services Exist</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

ServicesView.propTypes = {
    services : PropTypes.arrayOf(object).isRequired
}

export default ServicesView;
