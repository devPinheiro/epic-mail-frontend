import React from "react";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import Header from "./index";
import authReducer from "../../reducers";

afterEach(cleanup);

function renderWithRedux(
  component,
  { initialState, store = createStore(authReducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store
  };
}

describe("React Component Testing", () => {
  it("Should render component and pass", () => {
    renderWithRedux(
      <BrowserRouter>
        <Header />)
      </BrowserRouter>
    );
  });
});
