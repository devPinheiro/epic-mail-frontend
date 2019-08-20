import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import {
  profileLoading,
  profileLoadingDone,
  getProfile,
  clearProfile
} from "./profile.action";
import { LOADING, LOADING_DONE, CLEAR_PROFILE } from "./types";

configure({ adapter: new Adapter() });
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let store;

describe("Profile action test", () => {
  store = mockStore({});
  it("dispatches profile loading action", done => {
    const expectedActions = [{ type: LOADING }];

    store.dispatch(profileLoading());

    expect(store.getActions()).toEqual(expectedActions);
    done();
  });
  it("dispatches profile loading done action", done => {
    const expectedActions = [{ type: LOADING }, { type: LOADING_DONE }];

    store.dispatch(profileLoadingDone());

    expect(store.getActions()).toEqual(expectedActions);
    done();
  });

  it("dispatches clear profile action", done => {
    const expectedActions = [
      { type: LOADING },
      { type: LOADING_DONE },
      { type: CLEAR_PROFILE }
    ];

    store.dispatch(clearProfile());

    expect(store.getActions()).toEqual(expectedActions);
    done();
  });

  it("dispatches get profile action", done => {
    const expectedActions = [
      { type: LOADING },
      { type: LOADING_DONE },
      { type: CLEAR_PROFILE },
      { type: LOADING }
    ];

    store.dispatch(getProfile());

    expect(store.getActions()).toEqual(expectedActions);
    done();
  });
});
