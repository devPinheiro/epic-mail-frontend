import React from "react";
import PropTypes from "prop-types";

const Select = ({ classes, handleChange, handleBlur, options, ...rest }) => {
  return (
    <select
      {...rest}
      onChange={handleChange}
      onBlur={handleBlur}
      className={classes}
    >
      <option defaultValue> Select an option </option>

      {options.map((item, i) => {
        return (
          <option key={i} value={item.value}>
            {item.label}
          </option>
        );
      })}
    </select>
  );
};

Select.propTypes = {
  classes: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func
};
export default Select;
