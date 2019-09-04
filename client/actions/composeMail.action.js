import axios from "axios";
import { SUCCESS_MAIL, SUCCESS_FAIL } from "./types";
import { toast } from "react-toastify";

export const composeMail = data => dispatch => {
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
        toast.success("Mail sent successfully");
      }
    })
    .catch(err => {
      if (err.response) {
        toast.error(err.response.data.error);
      }
      dispatch(sendFail());
    });
};

export const draftMail = data => dispatch => {
  const tokenId = localStorage.getItem("token");
  return axios
    .post("https://epic-mail-devp.herokuapp.com/api/v1/messages", data, {
      method: "post",
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
        dispatch(sendSuccessMessage("Mail saved successfully"));
        toast.success("Mail saved successfully");
      }
    })
    .catch(err => {
      if (err.response) {
        toast.error(err.response.data.error);
      }
      dispatch(sendFail());
    });
};

export const sendSuccessMessage = payload => {
  return {
    type: SUCCESS_MAIL,
    payload
  };
};

export const sendFail = () => {
  return {
    type: SUCCESS_FAIL
  };
};
