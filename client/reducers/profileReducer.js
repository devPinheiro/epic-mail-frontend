import {
  GET_PROFILE,
  LOADING,
  CLEAR_PROFILE,
  LOADING_DONE
} from "../actions/types";

const initialState = {
  profile: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
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
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: true
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null
      };
    default:
      return state;
  }
};
