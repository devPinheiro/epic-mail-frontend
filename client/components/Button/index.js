import React from "react";
import PropTypes from "prop-types";
const Button = ({ type, clicked, children, isSubmitting }) => {
  return (
    <div className="form-group">
      <button
        type={type ? "button" : "submit"}
        onClick={clicked}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Working..." : children}
      </button>
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  clicked: PropTypes.func,
  children: PropTypes.string.isRequired,
  isSubmitting: PropTypes.bool
};

export default Button;
