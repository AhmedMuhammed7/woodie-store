import PropTypes from 'prop-types'
const Carousel = ({images}) => {
    return (
      <div className="col-lg-7 slider mb-5">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {images.map((image, index, arr) => (
              <div
                className={`carousel-item ${image === arr[0] ? "active" : ""}`}
                key={index}
              >
                <div className="d-flex justify-content-center">
                  <img
                    src={`http://localhost:4000/uploads/${image}`}
                    alt="not found"
                    style={{width:'500px'}}
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

export default Carousel
