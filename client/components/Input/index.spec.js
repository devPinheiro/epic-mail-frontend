import React from "react";
import { render, cleanup } from "@testing-library/react";
import Input from "./index";

afterEach(cleanup);

describe("React Component Testing", () => {
  it("Should render component and pass", () => {
    const handleClick = jest.fn();
    render(
      <Input
        classes="sm-btn"
        name="password"
        handleChange={handleClick}
        handleBlur={handleClick}
      ></Input>
    );
  });
});
