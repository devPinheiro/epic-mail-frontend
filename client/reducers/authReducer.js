import { SIGN_UP } from "../actions/types";

const initialSate = {};

export default (state = initialSate, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
