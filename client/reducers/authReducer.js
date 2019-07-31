import { SIGN_UP, SET_CURRENT_USER } from "../actions/types";
import { isEmpty } from "../validation/auth.validation";

const initialSate = {
  isAuthenticated: false,
  user: {}
};

export default (state = initialSate, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        user: action.payload
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
};
