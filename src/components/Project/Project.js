import Button from "../Button";
import PropTypes from "prop-types";
import bedRoom from "../../assets/bedroom.svg";
import armChair from "../../assets/armchair.svg";
import bathRoom from "../../assets/bathroom.svg";
import kitchenImage from "../../assets/kitchen.svg";
import "./Project.scss";
const Project = ({ project }) => {
  const {
    name,
    slogin,
    bedroom,
    description,
    living_room,
    bath_room,
    kitchen,
    thumbnail,
  } = project;
  return (
    <div className=" row p-3  mb-5">
      <div className="project">
        <div className="col-lg-5">
          <div className="text py-5 ps-5">
            <h3 className="fw-bold">{name || "project name"}</h3>
            <p className="slogin my-4">{slogin || "project slogin"}</p>
            <div className="options mt-5">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <img src={bedRoom} alt="not found" />
                  {bedroom || 2} Bed room
                </div>
                <div className="col-md-6 mb-4">
                  <img src={armChair} alt="not found" />
                  {living_room || 2} Living room
                </div>
                <div className="col-md-6 mb-4">
                  <img src={bathRoom} alt="not found" />
                  {bath_room || 2} Bath room
                </div>
                <div className="col-md-6 mb-4">
                  <img src={kitchenImage} alt="not found" />
                  {kitchen || 2} Kitchen
                </div>
              </div>
            </div>
            <div className="description">{description}</div>
            <Button
              path="/"
              text="read more"
              className="user-btn"
              type="button"
            />
          </div>
        </div>
        <div className="col-lg-7 p-0">
          <div className="image">
            <img
              src={`http://localhost:4000/uploads/${thumbnail}`}
              alt="not found"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired,
};
export default Project;
