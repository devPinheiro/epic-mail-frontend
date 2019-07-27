import axios from "axios";
import { GET_ERRORS } from "./types";

export const signUp = (data, history) => dispatch => {
  axios
    .post("https://epicmail-application.herokuapp.com/api/v2/auth/signup", data)
    .then(res => {
      // store user token
      res;
      history.push("/dashboard");
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
