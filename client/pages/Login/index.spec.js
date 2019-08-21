import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter } from "react-router-dom";
import mockAxios from "axios";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { login } from "../../actions/auth.action";
import { index as LoginPage } from "./index";
import loginReducer from "../../reducers/authReducer";

configure({ adapter: new Adapter() });

describe("Login component Tests", () => {
  const defaultProps = {
    login: jest.fn(
      {},
      {
        history: {
          push: jest.fn()
        }
      }
    ),
    errors: {},
    auth: {
      isAuthenticated: true,
      user: {}
    },
    handleSubmit: jest.fn(),
    history: {
      push: jest.fn()
    }
  };

  const state = {
    email: "",
    password: "",
    validationErrors: {},
    isSubmitting: false,
    serverError: {}
  };
  it("renders the Login component correctly", () => {
    const wrapper = shallow(<LoginPage {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render component successfully and check form interactions", () => {
    const component = mount(
      <BrowserRouter>
        <LoginPage {...defaultProps} />
      </BrowserRouter>
    );
    component.find("form").simulate("submit");
  });

  it(`should ensure submit button text on sign in is rendered appropriately`, () => {
    const component = shallow(<LoginPage {...defaultProps} />);
    const instance = component.instance();
    instance.handleSubmit({ preventDefault() {} });
  });

  it(`should ensure submit button text on sign in is rendered appropriately`, () => {
    const component = shallow(<LoginPage {...defaultProps} {...state} />);
    const instance = component.instance();
    instance.componentWillReceiveProps({
      auth: {
        isAuthenticated: true,
        user: {},
        errors: {
          serverErrors: ""
        }
      }
    });
    instance.setState({ serverError: "" });
  });

  it(`should ensure submit button text on sign in is rendered appropriately`, () => {
    const component = mount(
      <BrowserRouter>
        <LoginPage {...defaultProps} />
      </BrowserRouter>
    );
    expect(component.find(".login")).toBeTruthy();
  });

  it("should simulate an onchange event on form input", () => {
    const event = {
      preventDefault() {},
      target: { name: "email", value: "sammy@email.com" }
    };
    const component = mount(
      <BrowserRouter>
        <LoginPage {...defaultProps} />
      </BrowserRouter>
    );

    const inputTag = component.find("input").at(0);
    inputTag.simulate("change", event);
  });

  it("should call Login request function on submit of the form", () => {
    const wrapper = mount(
      <BrowserRouter>
        <LoginPage {...defaultProps} />{" "}
      </BrowserRouter>
    );

    wrapper.find("form").simulate("submit", { preventDefault() {} });
  });
});

describe("Login async action tests", () => {
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

  it("Should trigger the login action", () => {
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

    store.dispatch(login(userCredentials, historyObject)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("Login reducer tests", () => {
  it("Should return default state", () => {
    const newState = loginReducer(undefined, {});
    expect(newState).toEqual({
      isAuthenticated: false,
      user: {}
    });
  });
});
