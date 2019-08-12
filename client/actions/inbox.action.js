import axios from "axios";
import { GET_ERRORS, INBOX, LOADING, LOADING_DONE } from "./types";

export const inbox = () => dispatch => {
  dispatch(inboxLoading());
  const tokenId = localStorage.getItem("token");
  axios
    .get("https://epic-mail-devp.herokuapp.com/api/v1/messages", {
      method: "get",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": tokenId
      }
    })
    .then(res => {
      // get success
      const result = res.data;
      // dispatch a success message

      if (result.status === 200) {
        dispatch(sendSuccessMessage(result.data));
        dispatch(inboxLoadingDone());
      }
      history.push("/dashboard");
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data.error
      });
    });
};

export const sendSuccessMessage = payload => {
  return {
    type: INBOX,
    payload
  };
};

export const inboxLoading = () => {
  return {
    type: LOADING
  };
};

export const inboxLoadingDone = () => {
  return {
    type: LOADING_DONE
  };
};
