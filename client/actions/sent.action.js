import axios from "axios";
import { SENT_MAIL_SUCCESS, SENT_MAIL_START, SENT_MAIL_FAIL } from "./types";

export const sent = () => dispatch => {
  dispatch(sentMailStart());
  const tokenId = localStorage.getItem("token");
  return axios
    .get("https://epic-mail-devp.herokuapp.com/api/v1/messages/sent", {
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
        dispatch(sentMailSuccess(result.data));
      }
      history.push("/dashboard");
    })
    .catch(err => {
      if (err.response) {
        dispatch({
          type: SENT_MAIL_FAIL,
          payload: err.response.data.error
        });
      }
    });
};

export const sentMailSuccess = payload => {
  return {
    type: SENT_MAIL_SUCCESS,
    payload
  };
};

export const sentMailStart = () => {
  return {
    type: SENT_MAIL_START
  };
};

export const sentMailFail = payload => {
  return {
    type: SENT_MAIL_FAIL,
    payload
  };
};
