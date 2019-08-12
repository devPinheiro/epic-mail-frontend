import axios from "axios";
import { GET_PROFILE, LOADING, CLEAR_PROFILE, LOADING_DONE } from "./types";

export const getProfile = token => dispatch => {
  dispatch(profileLoading());
  axios
    .get("https://epic-mail-devp.herokuapp.com/api/v1/auth/user", {
      method: "get",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": token
      }
    })
    .then(res => {
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
      dispatch(profileLoadingDone());
    })
    .catch(() =>
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    );
};

export const profileLoading = () => {
  return {
    type: LOADING
  };
};

export const profileLoadingDone = () => {
  return {
    type: LOADING_DONE
  };
};

export const clearProfile = () => {
  return {
    type: CLEAR_PROFILE
  };
};
