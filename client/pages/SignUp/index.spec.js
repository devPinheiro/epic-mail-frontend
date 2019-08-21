import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter } from "react-router-dom";
import mockAxios from "axios";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { signUp } from "../../actions/auth.action";
import { index as SignUpPage } from "./index";
import signupReducer from "../../reducers/authReducer";
import { SIGN_UP, SET_CURRENT_USER } from "../../actions/types";

configure({ adapter: new Adapter() });

describe("Signup component Tests", () => {
  const defaultProps = {
    signUp: jest.fn(),
    errors: {},
    auth: {},
    handleSubmit: jest.fn()
  };

  it("renders the Signup component correctly", () => {
    const wrapper = shallow(<SignUpPage {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render component successfully and check form interactions", () => {
    const component = mount(
      <BrowserRouter>
        <SignUpPage {...defaultProps} />
      </BrowserRouter>
    );
    component.find("form").simulate("submit");
  });

  it(`should ensure submit button text on sign up is rendered appropriately`, () => {
    const component = mount(
      <BrowserRouter>
        <SignUpPage {...defaultProps} />
      </BrowserRouter>
    );
    expect(component.find(".signup")).toBeTruthy();
  });

  it(`should ensure submit button text on sign up is rendered appropriately`, () => {
    const component = shallow(<SignUpPage {...defaultProps} />);
    const instance = component.instance();

    instance.handleSubmit({ preventDefault() {} });
    instance.componentWillReceiveProps({
      auth: {
        isAuthenticated: true,
        user: {},
        errors: {
          serverErrors: ""
        }
      }
    });
  });

  it("should simulate an onchange event on form input", () => {
    const event = {
      preventDefault() {},
      target: { name: "firstName", value: "sammy" }
    };
    const component = mount(
      <BrowserRouter>
        <SignUpPage {...defaultProps} />
      </BrowserRouter>
    );

    const inputTag = component.find("input").at(0);
    inputTag.simulate("change", event);
  });

  it("should simulate an onchange event on form input", () => {
    const event = {
      preventDefault() {},
      target: { name: "lastName", value: "sammy" }
    };
    const component = mount(
      <BrowserRouter>
        <SignUpPage {...defaultProps} />
      </BrowserRouter>
    );

    const inputTag = component.find("input").at(1);
    inputTag.simulate("change", event);
  });

  it("should simulate an onchange event on form input", () => {
    const event = {
      preventDefault() {},
      target: { name: "email", value: "sammy@email.com" }
    };
    const component = mount(
      <BrowserRouter>
        <SignUpPage {...defaultProps} />
      </BrowserRouter>
    );

    const inputTag = component.find("input").at(2);
    inputTag.simulate("change", event);
  });

  it("should call Sign up request function on submit of the form", () => {
    const wrapper = mount(
      <BrowserRouter>
        <SignUpPage {...defaultProps} />{" "}
      </BrowserRouter>
    );

    wrapper.find("form").simulate("submit", { preventDefault() {} });
  });
});

describe("Sign Up async action tests", () => {
  const userCredentials = {
    email: "someuser@gmail.com",
    password: "randompassword"
  };

  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);
  let store;
  beforeEach(() => {
    store = mockStore({});
    jest.resetAllMocks();
  });
  afterEach(() => {
    store.clearActions();
  });

  it("Should trigger the signup action", () => {
    store = mockStore({});
    const mockData = {
      data: {
        firstName: "some",
        lastName: "user",
        email: "someuser@gmail.com",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsI…c4OX0.DfJClt28K3qIgJJWp9FMypDO0tKD1NoiNtO9YvEOvsQ"
      }
    };

    mockAxios.post.mockResolvedValue({
      status: 200,
      data: mockData
    });

    const expectedActions = [{ payload: mockData.data }];
    const historyObject = {
      push: jest.fn()
    };

    store.dispatch(signUp(userCredentials, historyObject)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("Signup reducer tests", () => {
  it("Should return default state", () => {
    const newState = signupReducer(undefined, {});
    expect(newState).toEqual({
      isAuthenticated: false,
      user: {}
    });
  });

  it("Should return SIGN_UP state", () => {
    const initialState = {
      isAuthenticated: false,
      user: {}
    };
    const newState = signupReducer(initialState, {
      type: SIGN_UP
    });
    expect(newState).toEqual({
      isAuthenticated: false,
      user: undefined
    });
  });

  it("Should return SET_CURRENT_USER state", () => {
    const initialState = {
      isAuthenticated: false,
      user: {}
    };
    const newState = signupReducer(initialState, {
      type: SET_CURRENT_USER
    });
    expect(newState).toEqual({
      isAuthenticated: false,
      user: undefined
    });
  });
});
