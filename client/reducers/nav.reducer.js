import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../actions/types";

const initialState = {
  openNav: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return {
        ...state,
        openNav: action.payload
      };
    case CLOSE_SIDEBAR:
      return {
        ...state,
        openNav: action.payload
      };
    default:
      return state;
  }
};
