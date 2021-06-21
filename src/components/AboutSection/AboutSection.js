import { useRef, useState } from "react";
import AboutVideo from "./AboutVideo";
import videoThumbnail from "../../assets/video-thumbnail.jpg";
import Button from '../Button'
import "./AboutSection.scss";
const AboutSection = () => {
  const youtubeVideo = useRef();
  const [played, setPlayed] = useState(false);
  const handelTogglePlaying = () => {
    if (!played) youtubeVideo.current.style.top = `${window.pageYOffset}px`;
    document.body.style.overflowY = `${!played ? "hidden" : "scroll"}`;
    youtubeVideo.current.classList.add(`${!played ? "d-flex" : "d-none"}`);
    youtubeVideo.current.classList.remove(`${!played ? "d-none" : "d-flex"}`);
    setPlayed(!played);
  };

  return (
    <div className="about-section py-5">
      <AboutVideo
        youtubeVideo={youtubeVideo}
        handelTogglePlaying={handelTogglePlaying}
      />
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4 text">
            <h2 className="fw-bold big-head-2">
              A small efficient interior design team.
            </h2>
            <p className="my-5">
              nteshape is a team of highly talented, experienced, and
              <br />
              architects and designers. Our company has been the
              <br /> leading provider of architecture services to clients
              <br /> through out the USA since May 1999.
            </p>
            <div className="my-5">
              <Button
                text="Contact Us"
                className="user-btn"
                type="button"
                path="/contact"
              />
            </div>
          </div>
          <div className="col-md-6 mb-4 vid position-relative">
            <img src={videoThumbnail} alt="not found" />
            <button
              className="position-absolute border-0"
              onClick={handelTogglePlaying}
            >
              <i className="fa fa-play"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
