import PropTypes from "prop-types";

const Input = ({ type, onChanging, value, name, label, id, placeholder }) => (
  <div className="form-group w-100">
    {label && (
      <label className="mb-2" htmlFor={id}>
        {label}
      </label>
    )}
    {type !== "textarea" ? (
      <input
        type={type || "text"}
        placeholder={placeholder || null}
        autoComplete="off"
        value={value}
        className="form-control mb-3 user-input"
        id={id || null}
        onChange={onChanging || null}
      />
    ) : (
      <textarea
        onChange={onChanging || null}
        name={name || null}
        className="form-control mb-3 user-input"
        id={id || null}
        rows="3"
        placeholder={placeholder || null}
        value={value}
      ></textarea>
    )}
  </div>
);

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChanging: PropTypes.func,
  id: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
