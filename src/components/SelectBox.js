import PropTypes from "prop-types";

const SelectBox = ({ options, value, onChanging, name }) => {
  const optionsList = options.map((option, index) => (
    <option value={option} key={option}>
      {option}
    </option>
  ));
  return (
    <select
      value={value}
      className="form-control mb-3 user-select"
      onChange={onChanging || null}
      name={name || null}
    >
      <option value="" disabled>
        Gender
      </option>
      {optionsList}
    </select>
  );
};

SelectBox.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  onChanging: PropTypes.func,
  name : PropTypes.string
};

export default SelectBox;
