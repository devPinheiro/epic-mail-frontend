import React from "react";
import PropTypes from "prop-types";

const Input = ({ classes, handleBlur, handleChange, name, ...rest }) => {
  return (
    <input
      {...rest}
      onChange={handleChange}
      onBlur={handleBlur}
      className={classes}
      name={name}
    />
  );
};

Input.propTypes = {
  classes: PropTypes.string,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func
};
export default Input;
