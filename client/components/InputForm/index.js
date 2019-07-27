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
      {errors
        ? errors.map((item, i) => {
            if (item.path === name) {
              return (
                <span key={i} className="red">
                  {item.message}
                </span>
              );
            }
          })
        : ""}
    </div>
  );
};

InputForm.propTypes = {
  inputtype: PropTypes.string,
  name: PropTypes.string.isRequired,
  errors: PropTypes.array,
  label: PropTypes.string
};

export default InputForm;
