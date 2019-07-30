import { GET_ERRORS } from "../actions/types";

const initialSate = {};

export default (state = initialSate, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return { ...state, serverError: action.payload };
    default:
      return state;
  }
};
