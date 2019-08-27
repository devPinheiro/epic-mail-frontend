import React from "react";
import { configure, mount, shallow } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import Adapter from "enzyme-adapter-react-16";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import {
  composeMail,
  sendSuccessMessage
} from "../../../actions/composeMail.action";
import {
  SUCCESS_MAIL,
  GET_ERRORS,
  LOADING,
  LOADING_DONE,
  COMPOSE_MAIL
} from "../../../actions/types";
import composeReducer from "../../../reducers/mail.reducer";
import { index as Compose } from "./index";

configure({ adapter: new Adapter() });
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let store;

describe("Compose action test", () => {
  store = mockStore({});
  it("dispatches send success action", done => {
    const expectedActions = [{ type: SUCCESS_MAIL }];

    store.dispatch(sendSuccessMessage());

    expect(store.getActions()).toEqual(expectedActions);
    done();
  });

  it("dispatches loading done action", done => {
    const expectedActions = [{ type: SUCCESS_MAIL }];

    store.dispatch(composeMail());

    expect(store.getActions()).toEqual(expectedActions);
    done();
  });

  describe("Composereducer tests", () => {
    const initialState = {
      loading: false,
      serverErrors: "",
      success: ""
    };

    it("Should return default state", () => {
      const newState = composeReducer(undefined, {});
      expect(newState).toEqual(initialState);
    });

    it("Should return a new state if it receives GET_ERRORS in action type", () => {
      const state = {
        loading: false,
        serverErrors: "",
        success: ""
      };
      const newState = composeReducer(initialState, {
        type: GET_ERRORS
      });
      expect(newState).toEqual(state);
    });

    it("Should return a new state if it receives LOADING in action type", () => {
      const state = {
        loading: true,
        serverErrors: "",
        success: ""
      };
      const newState = composeReducer(initialState, {
        type: LOADING
      });
      expect(newState).toEqual(state);
    });

    it("Should return a new state if it receives LOADING_DONE in action type", () => {
      const state = {
        loading: false,
        serverErrors: "",
        success: ""
      };
      const newState = composeReducer(initialState, {
        type: LOADING_DONE
      });
      expect(newState).toEqual(state);
    });

    it("Should return a new state if it receives INBOX in action type", () => {
      const state = {
        loading: false,
        serverErrors: "",
        success: ""
      };
      const newState = composeReducer(initialState, {
        type: COMPOSE_MAIL
      });
      expect(newState).toEqual(state);
    });
  });

  describe("Inbox page", () => {
    const defaultProps = {
      nav: {},
      composeMail: jest.fn(),
      messages: [],
      auth: {}
    };

    it("should render component", () => {
      const wrapper = mount(
        <BrowserRouter>
          <Compose {...defaultProps} />
        </BrowserRouter>
      );
      expect(wrapper).toMatchSnapshot();
      wrapper.find("form").simulate("submit");
    });

    it("should simulate an onchange event on form input", () => {
      const event = {
        preventDefault() {},
        target: { name: "email", value: "sammy" }
      };
      const component = mount(
        <BrowserRouter>
          <Compose {...defaultProps} />
        </BrowserRouter>
      );

      const inputTag = component.find("input").at(0);
      inputTag.simulate("change", event);
    });

    it("should simulate an onchange event on form input", () => {
      const event = {
        preventDefault() {},
        target: { name: "subject", value: "" }
      };
      const component = mount(
        <BrowserRouter>
          <Compose {...defaultProps} />
        </BrowserRouter>
      );

      const inputTag = component.find("input").at(1);
      inputTag.simulate("change", event);
    });

    it("should simulate an onchange event on form input", () => {
      const event = {
        preventDefault() {},
        target: { name: "mail_body", value: "" }
      };
      const component = mount(
        <BrowserRouter>
          <Compose {...defaultProps} />
        </BrowserRouter>
      );

      const inputTag = component.find("textarea").at(0);
      inputTag.simulate("change", event);
    });

    it("should update state", () => {
      const state = {
        email: "",
        subject: "",
        mail_body: "",
        isSubmitting: false,
        serverError: {},
        success: "",
        validationErrors: {},
        composeMail: jest.fn()
      };
      const wrapper = shallow(<Compose {...defaultProps} {...state} />);
      const instance = wrapper.instance();
      instance.componentWillReceiveProps({ errors: "new", success: true });
      instance.setState({ validationErrors: null });
      instance.handleSubmit({ preventDefault() {} });
    });
  });
});
