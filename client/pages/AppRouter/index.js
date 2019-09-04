import React from "react";
import { Provider } from "react-redux";
import { withRouter, Route, Switch } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Landing from "../../pages/Home";
import SignUp from "../SignUp";
import Login from "../Login";
import Dashboard from "../Dashboard/Inbox";
import Compose from "../Dashboard/CreateEmail";
import store from "../../store";
import PrivateRoute from "./PrivateRoute";
import Sent from "../Dashboard/Sent";
import Draft from "../Dashboard/Draft";

const Main = withRouter(({ location }) => {
  return (
    <Provider store={store}>
      {["/login", "/signup", "/dashboard", "/forgot-password"].includes(
        location.pathname
      ) ||
        (["/"].includes(location.pathname) && <Header />)}
      <Switch>
        <PrivateRoute component={Dashboard} exact path="/dashboard" />
        <PrivateRoute component={Sent} exact path="/sent" />
        <PrivateRoute component={Compose} exact path="/compose" />
        <PrivateRoute component={Draft} exact path="/draft" />
      </Switch>
      <Route component={Landing} exact path="/" />
      <Route component={SignUp} exact path="/signup" />
      <Route component={Login} exact path="/login" />

      {["/login", "/signup", "/dashboard", "/forgot-password"].includes(
        location.pathname
      ) ||
        (["/"].includes(location.pathname) && <Footer />)}
    </Provider>
  );
});

export default Main;
