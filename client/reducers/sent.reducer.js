import {
  SENT_MAIL_FAIL,
  SENT_MAIL_START,
  SENT_MAIL_SUCCESS
} from "../actions/types";

const initialState = {
  serverErrors: "",
  loading: false,
  sentMails: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SENT_MAIL_FAIL:
      return {
        ...state,
        serverErrors: action.payload,
        sentMails: ""
      };
    case SENT_MAIL_START:
      return {
        ...state,
        loading: true
      };
    case SENT_MAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        serverErrors: "",
        sentMails: action.payload
      };
    default:
      return state;
  }
};
