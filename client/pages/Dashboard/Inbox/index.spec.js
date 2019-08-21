import React from "react";
import { configure, mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import Adapter from "enzyme-adapter-react-16";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import {
  inbox,
  inboxLoading,
  inboxLoadingDone,
  sendSuccessMessage
} from "../../../actions/inbox.action";
import {
  INBOX,
  LOADING,
  LOADING_DONE,
  GET_ERRORS
} from "../../../actions/types";
import inboxReducer from "../../../reducers/inbox.reducer";
import { index as Inbox } from "./index";

configure({ adapter: new Adapter() });
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let store;

describe("Inbox action test", () => {
  store = mockStore({});
  it("dispatches loading action", done => {
    const expectedActions = [{ type: LOADING }];

    store.dispatch(inboxLoading());

    expect(store.getActions()).toEqual(expectedActions);
    done();
  });

  it("dispatches loading done action", done => {
    const expectedActions = [{ type: LOADING }, { type: LOADING_DONE }];

    store.dispatch(inboxLoadingDone());

    expect(store.getActions()).toEqual(expectedActions);
    done();
  });

  it("dispatches send success message action", done => {
    const expectedActions = [
      { type: LOADING },
      { type: LOADING_DONE },
      { type: INBOX, payload: undefined }
    ];

    store.dispatch(sendSuccessMessage());

    expect(store.getActions()).toEqual(expectedActions);
    done();
  });

  it("dispatches inbox action", done => {
    const expectedActions = [
      { type: LOADING },
      { type: LOADING_DONE },
      { type: INBOX, payload: undefined },
      { type: LOADING }
    ];

    store.dispatch(inbox());

    expect(store.getActions()).toEqual(expectedActions);
    done();
  });

  describe("Inbox reducer tests", () => {
    const initialState = {
      loading: false,
      serverErrors: "",
      successInbox: ""
    };

    it("Should return default state", () => {
      const newState = inboxReducer(undefined, {});
      expect(newState).toEqual(initialState);
    });

    it("Should return a new state if it receives GET_ERRORS in action type", () => {
      const state = {
        loading: false,
        serverErrors: undefined,
        successInbox: ""
      };
      const newState = inboxReducer(initialState, {
        type: GET_ERRORS
      });
      expect(newState).toEqual(state);
    });

    it("Should return a new state if it receives LOADING in action type", () => {
      const state = {
        loading: true,
        serverErrors: "",
        successInbox: ""
      };
      const newState = inboxReducer(initialState, {
        type: LOADING
      });
      expect(newState).toEqual(state);
    });

    it("Should return a new state if it receives LOADING_DONE in action type", () => {
      const state = {
        loading: false,
        serverErrors: "",
        successInbox: ""
      };
      const newState = inboxReducer(initialState, {
        type: LOADING_DONE
      });
      expect(newState).toEqual(state);
    });

    it("Should return a new state if it receives INBOX in action type", () => {
      const state = {
        loading: false,
        serverErrors: "",
        successInbox: "",
        messages: undefined
      };
      const newState = inboxReducer(initialState, {
        type: INBOX
      });
      expect(newState).toEqual(state);
    });
  });

  describe("Inbox page", () => {
    const defaultProps = {
      nav: {},
      messages: [],
      inbox: jest.fn()
    };

    it("should render component", () => {
      const wrapper = mount(
        <BrowserRouter>
          <Inbox {...defaultProps} />
        </BrowserRouter>
      );
      expect(wrapper).toMatchSnapshot();
    });

    it("should render component", () => {
      const defaultProps = {
        nav: {},
        messages: [
          {
            message_id: 59,
            status: "unread",
            receiver_id: 36,
            sender_id: 36,
            parent_message_id: 1,
            created_on: "2019-08-19T23:59:51.249Z",
            message: "we are here",
            subject: "New stuf",
            first_name: "mytest",
            last_name: "tester",
            image: "https://lorempixel.com/200/200/people/",
            email: "tester@gmail.com"
          },
          {
            message_id: 58,
            status: "unread",
            receiver_id: 36,
            sender_id: 36,
            parent_message_id: 1,
            created_on: "2019-08-19T22:34:44.068Z",
            message: "We are testing it up",
            subject: "New stuf",
            first_name: "mytest",
            last_name: "tester",
            image: "https://lorempixel.com/200/200/people/",
            email: "tester@gmail.com"
          },
          {
            message_id: 57,
            status: "unread",
            receiver_id: 36,
            sender_id: 36,
            parent_message_id: 1,
            created_on: "2019-08-16T00:54:38.476Z",
            message: "What's up?",
            subject: "Hey Guys",
            first_name: "mytest",
            last_name: "tester",
            image: "https://lorempixel.com/200/200/people/",
            email: "tester@gmail.com"
          },
          {
            message_id: 29,
            status: "unread",
            receiver_id: 36,
            sender_id: 36,
            parent_message_id: 1,
            created_on: "2019-08-13T20:37:35.159Z",
            message: "gfgerty6u6ytrheht",
            subject: "3453345",
            first_name: "mytest",
            last_name: "tester",
            image: "https://lorempixel.com/200/200/people/",
            email: "tester@gmail.com"
          },
          {
            message_id: 28,
            status: "unread",
            receiver_id: 36,
            sender_id: 36,
            parent_message_id: 1,
            created_on: "2019-08-13T20:37:32.947Z",
            message: "gfgerty6u6ytrheht",
            subject: "3453345",
            first_name: "mytest",
            last_name: "tester",
            image: "https://lorempixel.com/200/200/people/",
            email: "tester@gmail.com"
          },
          {
            message_id: 27,
            status: "unread",
            receiver_id: 36,
            sender_id: 36,
            parent_message_id: 1,
            created_on: "2019-08-13T10:48:30.057Z",
            message: "3rwerwwgdsfsdf dfsdfnskflnewlkfwfnrklwefnlkw knwkflwfk",
            subject: "123124234234",
            first_name: "mytest",
            last_name: "tester",
            image: "https://lorempixel.com/200/200/people/",
            email: "tester@gmail.com"
          },
          {
            message_id: 26,
            status: "unread",
            receiver_id: 36,
            sender_id: 36,
            parent_message_id: 1,
            created_on: "2019-08-13T10:47:55.837Z",
            message: "3rwerwwgdsfsdf dfsdfnskflnewlkfwfnrklwefnlkw knwkflwfk",
            subject: "123124234234",
            first_name: "mytest",
            last_name: "tester",
            image: "https://lorempixel.com/200/200/people/",
            email: "tester@gmail.com"
          },
          {
            message_id: 25,
            status: "unread",
            receiver_id: 36,
            sender_id: 36,
            parent_message_id: 1,
            created_on: "2019-08-13T10:47:55.763Z",
            message: "3rwerwwgdsfsdf dfsdfnskflnewlkfwfnrklwefnlkw knwkflwfk",
            subject: "123124234234",
            first_name: "mytest",
            last_name: "tester",
            image: "https://lorempixel.com/200/200/people/",
            email: "tester@gmail.com"
          },
          {
            message_id: 24,
            status: "unread",
            receiver_id: 36,
            sender_id: 36,
            parent_message_id: 1,
            created_on: "2019-08-13T10:47:55.696Z",
            message: "3rwerwwgdsfsdf dfsdfnskflnewlkfwfnrklwefnlkw knwkflwfk",
            subject: "123124234234",
            first_name: "mytest",
            last_name: "tester",
            image: "https://lorempixel.com/200/200/people/",
            email: "tester@gmail.com"
          },
          {
            message_id: 23,
            status: "unread",
            receiver_id: 36,
            sender_id: 36,
            parent_message_id: 1,
            created_on: "2019-08-13T10:47:55.682Z",
            message: "3rwerwwgdsfsdf dfsdfnskflnewlkfwfnrklwefnlkw knwkflwfk",
            subject: "123124234234",
            first_name: "mytest",
            last_name: "tester",
            image: "https://lorempixel.com/200/200/people/",
            email: "tester@gmail.com"
          },
          {
            message_id: 22,
            status: "unread",
            receiver_id: 36,
            sender_id: 36,
            parent_message_id: 1,
            created_on: "2019-08-13T10:47:55.670Z",
            message: "3rwerwwgdsfsdf dfsdfnskflnewlkfwfnrklwefnlkw knwkflwfk",
            subject: "123124234234",
            first_name: "mytest",
            last_name: "tester",
            image: "https://lorempixel.com/200/200/people/",
            email: "tester@gmail.com"
          },
          {
            message_id: 21,
            status: "unread",
            receiver_id: 36,
            sender_id: 36,
            parent_message_id: 1,
            created_on: "2019-08-12T23:10:29.942Z",
            message: "tester mail",
            subject: "test",
            first_name: "mytest",
            last_name: "tester",
            image: "https://lorempixel.com/200/200/people/",
            email: "tester@gmail.com"
          }
        ],
        inbox: jest.fn()
      };
      const wrapper = mount(
        <BrowserRouter>
          <Inbox {...defaultProps} />
        </BrowserRouter>
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
