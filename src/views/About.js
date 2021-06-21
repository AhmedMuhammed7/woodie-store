import Proptypes from 'prop-types'
import Header from "../components/Header/Header";
import AboutSection from '../components/AboutSection/AboutSection'
import Properties from "../components/Properties/Properties";
import Footer from "../components/Footer/Footer";


const About = ({project}) => (
  <div id="about">
    <Header text="About" />
    <AboutSection/>
    <Properties project={project}/>
    <Footer />
  </div>
);

About.propTypes = {
    project : Proptypes.object
}

export default About;
