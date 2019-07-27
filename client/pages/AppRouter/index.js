import React from "react";
import { Provider } from "react-redux";
import { withRouter, Route } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Landing from "../../pages/Home";
import SignUp from "../SignUp";
import store from "../../store";

const Main = withRouter(({ location }) => {
  return (
    <Provider store={store}>
      {location.pathname !== "/signup" && <Header />}
      <Route component={Landing} exact path="/" />
      <Route component={SignUp} exact path="/signup" />
      {location.pathname !== "/signup" && <Footer />}
    </Provider>
  );
});

export default Main;
