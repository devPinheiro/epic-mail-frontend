import React from "react";
import PropTypes from "prop-types";

const Textarea = ({ classes, handleChange, handleBlur, ...rest }) => {
  return (
    <textarea
      {...rest}
      onChange={handleChange}
      onBlur={handleBlur}
      className={classes}
    />
  );
};

Textarea.propTypes = {
  classes: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func
};

export default Textarea;
