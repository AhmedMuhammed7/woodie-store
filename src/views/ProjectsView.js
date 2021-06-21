import PropTypes, { object } from "prop-types";
import Header from "../components/Header/Header";
import Projects from "../components/Projects";
import Footer from "../components/Footer/Footer";

const ProjectsView = ({ projects }) => (
  <div>
    <Header text="Projects" />
    <div className="container">
      {projects.length >= 1 ? (
        <Projects projects={projects} />
      ) : (
        <div className="m-4"> No Projects Exist</div>
      )}
    </div>
    <Footer />
  </div>
);
ProjectsView.propTypes = {
  projects: PropTypes.arrayOf(object).isRequired,
};

export default ProjectsView;
