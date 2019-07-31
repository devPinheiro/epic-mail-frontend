import React from "react";
import { createStore } from "redux";
// import axiosMock from "axios";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { render, cleanup, fireEvent } from "@testing-library/react";
// import mockAxios from "axios";
import Login from "./index";
// import { login } from "../../actions/auth.action";
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

// axiosMock.post.mockResolvedValueOnce({
//     data: { greeting: 'hello there' },
// })

// const data = {
//   email: "sammy@gmi.com",
//   password: "sammy@gmi.com"
// };
// test an action
// it("should call login function", async () => {
//   const response = await login(data, jest.fn());
//   console.log(response);

//   expect(mockAxios.request).toHaveBeenCalledWith({
//     method: "get"
//   });
//   expect(mockAxios.request).toHaveBeenCalledTimes(1);
// });

it("Should render component", () => {
  const initialState = { isAuthenticated: false, user: {} };
  const { getByText } = renderWithRedux(
    <BrowserRouter>
      <Login />
    </BrowserRouter>,
    initialState
  );

  // console.log(getByTestId(""))

  fireEvent.click(getByText("Login"));
});
