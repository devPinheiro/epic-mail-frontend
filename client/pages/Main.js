import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Landing from "../pages/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route component={Landing} exact path="/" />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
