import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import Index from "./index";

describe("React Component Testing", () => {
  it("Should render component and pass", () => {
    render(
      <BrowserRouter>
        <Index />)
      </BrowserRouter>
    );
  });
});
