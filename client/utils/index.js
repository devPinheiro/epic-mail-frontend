import axios from "axios";

export const setAuthToken = token => {
  if (token) {
    //set token to auth
    axios.defaults.headers.common["x-access-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-access-token"];
  }
};
