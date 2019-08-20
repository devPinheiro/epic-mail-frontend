import { GET_ERRORS, LOADING, LOADING_DONE, INBOX } from "../actions/types";

const initialState = {
  serverErrors: "",
  loading: false,
  successInbox: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        serverErrors: action.payload,
        successInbox: ""
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case LOADING_DONE:
      return {
        ...state,
        loading: false,
        serverErrors: ""
      };
    case INBOX:
      return {
        ...state,
        messages: action.payload,
        serverErrors: ""
      };
    default:
      return state;
  }
};
