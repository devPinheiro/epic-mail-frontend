import React from "react";
import { render, cleanup } from "@testing-library/react";
import TextArea from "./index";

afterEach(cleanup);

describe("React Component Testing", () => {
  it("Should render component and pass", () => {
    const handleClick = jest.fn();
    render(
      <TextArea
        classes="sm-btn"
        handleChange={handleClick}
        handleBlur={handleClick}
      ></TextArea>
    );
  });
});
