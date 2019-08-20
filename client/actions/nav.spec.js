import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { openSidebar, closeSidebar } from "./nav.action";
import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "./types";

configure({ adapter: new Adapter() });
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let store;

describe("Navigation action test", () => {
  store = mockStore({});
  it("dispatches open sidebar action", done => {
    const expectedActions = [{ type: OPEN_SIDEBAR, payload: true }];

    store.dispatch(openSidebar());

    expect(store.getActions()).toEqual(expectedActions);
    done();
  });

  it("dispatches close sidebar action", done => {
    const expectedActions = [
      { type: OPEN_SIDEBAR, payload: true },
      { type: CLOSE_SIDEBAR, payload: false }
    ];

    store.dispatch(closeSidebar());

    expect(store.getActions()).toEqual(expectedActions);
    done();
  });
});
