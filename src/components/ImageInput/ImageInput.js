import { useState, useRef } from "react";
import PropTypes from "prop-types";
import ImagesBox from "./ImagesBox";
import image from "../../assets/picture.svg";
import "./ImageInput.scss";
const ImageInput = ({ multiple, setFunc }) => {
  const inputField = useRef();
  const [imagesURLs, setImagesURLs] = useState([]);

  const handelImages = (e) => {
    for (let file of e.target.files) {
      setFunc(multiple ? (images) => [...images, file] : file);
      setImagesURLs((urls) => [...urls, URL.createObjectURL(file)]);
    }
  };

  const multipleImages = (position) => (images) => {
    const result = [...images];
    result.splice(position, 1);
    return result;
  };

  const handelRemoveImage = (position) => {
    setFunc(multiple ? multipleImages(position) : "");
    setImagesURLs((urls) => {
      const result = [...urls];
      result.splice(position, 1);
      return result;
    });
  };

  const label = multiple
    ? imagesURLs.length < 4 && (
        <label htmlFor="imageInput" className="mb-3 image-input-label ">
          <img src={image} alt="not found" />
        </label>
      )
    : imagesURLs.length === 0 && (
        <label htmlFor="imageInput" className="mb-3 image-input-label ">
          <img src={image} alt="not found" />
        </label>
      );

  return (
    <div className="image-input w-100 mb-3">
      {label}
      <input
        type="file"
        accept="image/*"
        className="d-none"
        multiple={multiple}
        ref={inputField}
        onChange={handelImages}
        id="imageInput"
      />
      <ImagesBox imagesURLs={imagesURLs} removeFunc={handelRemoveImage} />
    </div>
  );
};

ImageInput.propTypes = {
  multiple: PropTypes.bool,
  setFunc: PropTypes.func,
};

export default ImageInput;
