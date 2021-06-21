import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./StarWidget.scss";
const StarWidget = ({ Total, length, singleRate, align }) => {
  const [rate, setRate] = useState(0);

  const handelRating = (value, length) => {
    let computedRates = value / length;
    return computedRates - Math.floor(computedRates) >= 0.5
      ? Math.ceil(computedRates)
      : Math.floor(computedRates);
  };
  useEffect(() => {
    let mounted = true;
    if (mounted) setRate(singleRate ? singleRate : handelRating(Total, length));
    return () => (mounted = false);
  }, [length, Total, singleRate]);
  const stars = [1, 2, 3, 4, 5];
  return (
    <div
      className={`star-widget my-1 d-flex justify-content-${align} flex-row-reverse position-relative`}
    >
      {stars.map((star, index) => (
        <i
          className={`fa fa-star ${rate > 5 - (index + 1) && "yellow"}`}
          id={`rate-${star}`}
          key={star}
        ></i>
      ))}
      <div className="position-absolute w-100 h-100"></div>
    </div>
  );
};

StarWidget.propTypes = {
  length: PropTypes.number,
  Total: PropTypes.number,
  align: PropTypes.string,
};

export default StarWidget;
