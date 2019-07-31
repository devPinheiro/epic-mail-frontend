import axios from "axios";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import { setAuthToken } from "../utils";

export const signUp = (data, history) => dispatch => {
  axios
    .post("https://epic-mail-devp.herokuapp.com/api/v1/auth/signup", data)
    .then(res => {
      // store user token
      const userToken = res.data.data.token;

      setAuthToken(userToken);
      // decode user
      const user = jwt_decode(userToken);
      // set current user
      dispatch(setCurrentUser(user));
      localStorage.setItem("token", userToken);
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

export const login = (data, history) => dispatch => {
  axios
    .post("https://epic-mail-devp.herokuapp.com/api/v1/auth/login", data)
    .then(res => {
      // store user token
      const userToken = res.data.data.token;
      setAuthToken(userToken);
      // decode user
      const user = jwt_decode(userToken);
      // set current user
      dispatch(setCurrentUser(user));
      localStorage.setItem("token", userToken);
      history.push("/dashboard");
    })
    .catch(err => {
      const formatError = {};
      formatError["email"] = err.response.data.error;
      dispatch({
        type: GET_ERRORS,
        payload: formatError
      });
    });
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logout = () => dispatch => {
  // remove token
  localStorage.removeItem("token");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};
