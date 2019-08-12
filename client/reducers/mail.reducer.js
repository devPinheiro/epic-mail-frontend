import {
  GET_ERRORS,
  LOADING,
  LOADING_DONE,
  SUCCESS_MAIL
} from "../actions/types";

const initialState = {
  serverErrors: "",
  loading: false,
  success: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        serverErrors: action.payload,
        success: ""
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case LOADING_DONE:
      return {
        ...state,
        loading: false
      };
    case SUCCESS_MAIL:
      return {
        ...state,
        success: action.payload,
        serverErrors: ""
      };
    default:
      return state;
  }
};
