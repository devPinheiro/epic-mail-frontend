import React from "react";
import { render, cleanup } from "@testing-library/react";
import Button from "./index";

afterEach(cleanup);

describe("React Component Testing", () => {
  it("Should render component and pass when submitting is true", () => {
    const handleClick = jest.fn();
    render(
      <Button isSubmitting={true} clicked={handleClick} type="button">
        Sample Button
      </Button>
    );
  });
  it("Should render component and pass when submitting is false", () => {
    const handleClick = jest.fn();
    render(
      <Button isSubmitting={false} clicked={handleClick}>
        Sample Button
      </Button>
    );
  });
});
