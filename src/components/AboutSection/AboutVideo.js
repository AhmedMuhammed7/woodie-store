import PropTypes from 'prop-types'
const AboutVideo = ({ youtubeVideo, handelTogglePlaying }) => (
  <div
    className="youtube-video position-absolute w-100 d-none justify-content-center align-items-center"
    style={{
      height: `${window.innerHeight}px`,
    }}
    ref={youtubeVideo}
  >
    <iframe
      src="https://www.youtube.com/embed/XHOmBV4js_E?autoplay=1"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
    <button className="border-0 mt-4 position-absolute" onClick={handelTogglePlaying}>
      <i className="fa fa-close"></i>
    </button>
  </div>
);

AboutVideo.propTypes = {
  handelTogglePlaying : PropTypes.func,
  youtubeVideo : PropTypes.object
}

export default AboutVideo;
