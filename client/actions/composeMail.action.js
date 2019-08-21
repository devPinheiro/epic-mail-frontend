import axios from "axios";
import { GET_ERRORS, SUCCESS_MAIL } from "./types";

export const composeMail = (data, history) => dispatch => {
  const tokenId = localStorage.getItem("token");
  return axios
    .post("https://epic-mail-devp.herokuapp.com/api/v1/messages", data, {
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
      if (result.status === 201) {
        dispatch(sendSuccessMessage("Mail sent successfully"));
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
    type: SUCCESS_MAIL,
    payload
  };
};
