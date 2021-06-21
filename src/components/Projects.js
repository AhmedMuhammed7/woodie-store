import PropTypes, { object } from "prop-types";
import Project from "./Project/Project";

const Projects = ({ projects }) => {
  return (
    <div>
      {projects.map((project) => (
        <Project project={project} key={project._id} />
      ))}
    </div>
  );
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(object).isRequired,
};

export default Projects;
