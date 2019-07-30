import axios from "axios";
import { GET_ERRORS, SIGN_UP } from "./types";

export const signUp = (data, history) => dispatch => {
  axios
    .post("https://epicmail-application.herokuapp.com/api/v2/auth/signup", data)
    .then(res => {
      // store user token
      const userToken = res.data.data.token;
      dispatch({
        type: SIGN_UP,
        payload: {
          isAuthenticated: true,
          user: {
            firstName: data.firstName,
            email: data.email
          }
        }
      });
      localStorage.setItem("token", userToken);
      localStorage.setItem(
        "user",
        JSON.stringify({
          firstName: data.firstName,
          email: data.email
        })
      );
      history.push("/dashboard");
    })
    .catch(err => {
      const formatError = {};
      formatError["email"] = err.response.data.message;
      dispatch({
        type: GET_ERRORS,
        payload: formatError
      });
    });
};
