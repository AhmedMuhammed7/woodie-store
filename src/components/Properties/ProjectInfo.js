import { useRef } from "react";
import bedRoomImage from "../../assets/bedroom.svg";
import armChairImage from "../../assets/armchair.svg";
import bathRoomImage from "../../assets/bathroom.svg";
import kitchenImage from "../../assets/kitchen.svg";

const ProjectInfo = ({ project }) => {
    const { name, living_room, bedroom, bath_room, kitchen, slogin } = project;
  const features = useRef([
    {
      image: bedRoomImage,
      text: "BEDROOM",
      value: bedroom,
    },
    {
      image: armChairImage,
      text: "LIVING ROOM",
      value: living_room,
    },
    {
      image: bathRoomImage,
      text: "BATH ROOM",
      value: bath_room,
    },
    {
      image: kitchenImage,
      text: "KITCHEN",
      value: kitchen,
    },
  ]);

  return (
    <div className="col-lg-7 project-info position-relative">
      <div className="content position-absolute px-5 d-flex flex-column justify-content-center">
        <h5 className="fw-bold">{name}</h5>
        <p>{slogin}</p>
        <ul>
          {features.current.map((feature) => (
            <li key={feature.image}>
              <img src={feature.image} alt="not found" />
              {`${feature.value || 0} ${feature.text}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default ProjectInfo;
