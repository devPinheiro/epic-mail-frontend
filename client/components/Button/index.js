import React from "react";
import PropTypes from "prop-types";
const Button = ({ type, clicked, children, isSubmitting, ...rest }) => {
  return (
    <button
      {...rest}
      type={type ? "button" : "submit"}
      onClick={clicked}
      disabled={isSubmitting}
    >
      {isSubmitting ? "Working..." : children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  clicked: PropTypes.func,
  children: PropTypes.any.isRequired,
  isSubmitting: PropTypes.bool
};

export default Button;
