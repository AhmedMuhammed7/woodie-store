import Info from "./Info";
import ProjectInfo from "./ProjectInfo";
import {WithHeads} from "../../Utils/HOC";

import "./Properties.scss";

const InfoWithHeads =
  WithHeads(Info)("Featured")("Properties")("projects")("right");

const Properties = ({ project }) => (
  <div className="properties py-4 border-top border-1 border-bottom">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 mb-5">
          <InfoWithHeads />
        </div>
        <ProjectInfo project={project}/>
      </div>
    </div>
  </div>
);

export default Properties;
