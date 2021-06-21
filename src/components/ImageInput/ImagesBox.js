import { useRef } from "react";
import PropTypes from "prop-types";
import CloseButton from "../CloseButton";
const ImagesBox = ({ imagesURLs, removeFunc }) => {
  const imagesBox = useRef();

  const handelImagesBoxStyle = () =>
    imagesBox.current && imagesURLs.length > 1
      ? `w-100 d-flex ${
          imagesURLs.length !== 2 ? "justify-content-between" : ""
        } flex-wrap`
      : "handel-width";

  const handelImageStyle = (arr) => (arr.length > 1 ? `${100 / 4.1}%` : "100%");

  const imagesList = imagesURLs.map((image, index, arr) =>
    index < 4 ? (
      <div
        className="images position-relative h-100"
        key={image}
        style={{ width: handelImageStyle(arr) }}
      >
        <CloseButton removeFunc={removeFunc} />
        <img
          src={image}
          alt="nof found"
          className={`${imagesURLs.length === 2 ? "mx-1" : "mb-1"} w-100 h-100`}
        />
      </div>
    ) : null
  );

  return (
    <div
      ref={imagesBox}
      className={`${
        imagesList.length >= 1 && "images-box"
      } p-2 ${handelImagesBoxStyle()} rounded`}
    >
      {imagesList}
    </div>
  );
};

ImagesBox.propTypes = {
  imagesURLs: PropTypes.array.isRequired,
  removeFunc: PropTypes.func.isRequired,
};

export default ImagesBox;
