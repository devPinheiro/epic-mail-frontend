import axios from "axios";
import { draft_MAIL_SUCCESS, draft_MAIL_START, draft_MAIL_FAIL } from "./types";

export const draft = () => dispatch => {
  dispatch(draftMailStart());
  const tokenId = localStorage.getItem("token");
  return axios
    .get("https://epic-mail-devp.herokuapp.com/api/v1/messages/draft", {
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
        dispatch(draftMailSuccess(result.data));
      }
      history.push("/dashboard");
    })
    .catch(err => {
      if (err.response) {
        dispatch({
          type: draft_MAIL_FAIL,
          payload: err.response.data.error
        });
      }
    });
};

export const draftMailSuccess = payload => {
  return {
    type: draft_MAIL_SUCCESS,
    payload
  };
};

export const draftMailStart = () => {
  return {
    type: draft_MAIL_START
  };
};

export const draftMailFail = payload => {
  return {
    type: draft_MAIL_FAIL,
    payload
  };
};
