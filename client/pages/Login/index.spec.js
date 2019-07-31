import React from "react";
import { createStore } from "redux";
// import axiosMock from "axios";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Login from "./index";
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

// axiosMock.get.mockResolvedValueOnce({
//     data: { greeting: 'hello there' },
// })

it("Should render component", () => {
  const initialState = { isAuthenticated: false, user: {} };
  const { getByText } = renderWithRedux(
    <BrowserRouter>
      <Login />
    </BrowserRouter>,
    initialState
  );

  fireEvent.click(getByText("Login"));
});
