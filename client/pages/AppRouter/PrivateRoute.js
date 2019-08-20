import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SideNavBar from "../../components/SideNavBar";
import NavBar from "../../components/NavBar";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <div className="container-grid-1">
    <SideNavBar />
    <div className="col-2 main">
      <NavBar />
      <Route
        {...rest}
        render={props =>
          auth.isAuthenticated === true ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    </div>
  </div>
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
  component: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
