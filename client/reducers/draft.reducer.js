import {
  draft_MAIL_FAIL,
  draft_MAIL_START,
  draft_MAIL_SUCCESS
} from "../actions/types";

const initialState = {
  serverErrors: "",
  loading: false,
  draftMails: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case draft_MAIL_FAIL:
      return {
        ...state,
        serverErrors: action.payload,
        draftMails: ""
      };
    case draft_MAIL_START:
      return {
        ...state,
        loading: true
      };
    case draft_MAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        serverErrors: "",
        draftMails: action.payload
      };
    default:
      return state;
  }
};
