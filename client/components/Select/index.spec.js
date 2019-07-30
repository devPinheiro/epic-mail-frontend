import React from "react";
import { render, cleanup } from "@testing-library/react";
import Select from "./index";

afterEach(cleanup);

describe("React Component Testing", () => {
  it("Should render component and pass", () => {
    const handleClick = jest.fn();
    const options = ["firstName", "lastName", "email"];
    render(
      <Select
        classes="sm-btn"
        handleChange={handleClick}
        options={options}
      ></Select>
    );
  });
});
