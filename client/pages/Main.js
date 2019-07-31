import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "../pages/AppRouter";
import { setAuthToken } from "../utils";
import store from "../store";
import { setCurrentUser, logout } from "../actions/auth.action";

if (localStorage.token) {
  // set auth token
  setAuthToken(localStorage.token);
  //decode
  const decoded = jwt_decode(localStorage.token);
  // set current user
  store.dispatch(setCurrentUser(decoded));
  // for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/";
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <Main />
      </Router>
    );
  }
}

export default App;
