import React from "react";
import { render, cleanup } from "@testing-library/react";
import InputForm from "./index";

afterEach(cleanup);

describe("React Component Testing", () => {
  it("Should render an input field component", () => {
    const handleClick = jest.fn();
    const errors = [{ message: "Email is required", path: "" }];
    const { getByText } = render(
      <InputForm
        inputtype="input"
        classes="sm-btn"
        name="email"
        label="input field"
        handleChange={handleClick}
        handleBlur={handleClick}
        errors={errors}
      ></InputForm>
    );
    getByText("input field");
  });
  it("Should render a textarea field component", () => {
    const handleClick = jest.fn();
    const errors = [
      { message: "Textarea is required", path: "textarea" },
      { message: "Textarea is required", path: "textarea" }
    ];
    const { getByText } = render(
      <InputForm
        inputtype="textarea"
        classes="sm-btn"
        name="textarea"
        handleChange={handleClick}
        handleBlur={handleClick}
        errors={errors}
      ></InputForm>
    );
    getByText("textarea");
  });
  it("Should render a select field component", () => {
    const handleClick = jest.fn();
    const options = ["firstName", "lastName", "email"];
    const { getByText } = render(
      <InputForm
        inputtype="select"
        classes="sm-btn"
        name="input field"
        handleChange={handleClick}
        handleBlur={handleClick}
        options={options}
      ></InputForm>
    );
    getByText("Select an option");
  });
});
