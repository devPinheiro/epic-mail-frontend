import React from "react";
import Input from "../Input";
import TextArea from "../TextArea";
import Select from "../Select";
import PropTypes from "prop-types";

const InputForm = props => {
  const { inputtype, label, name, errors } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label || name}</label>
      {inputtype === "textarea" ? (
        <TextArea {...props} />
      ) : inputtype === "select" ? (
        <Select {...props} />
      ) : (
        <Input {...props} />
      )}
      {errors ? <small className="red">{errors[name]}</small> : ""}
    </div>
  );
};

InputForm.propTypes = {
  inputtype: PropTypes.string,
  name: PropTypes.string.isRequired,
  errors: PropTypes.object,
  label: PropTypes.string
};

export default InputForm;
