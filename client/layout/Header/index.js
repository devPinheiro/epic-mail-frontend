import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/auth.action";
import { clearProfile } from "../../actions/profile.action";

export class index extends Component {
  handleLogout(e) {
    e.preventDefault();
    this.props.clearProfile();
    this.props.logout(this.props.history);
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    const auth = (
      <div className="col-navlink linker">
        <ul className="nav-link">
          <li className="btn-item">
            <Link
              onClick={this.handleLogout.bind(this)}
              to="/"
              className="btn-signin"
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    );
    const guest = (
      <div className="col-navlink linker">
        <ul className="nav-link">
          <li className="btn-item">
            <Link to="/login" className="btn-signin">
              Sign in
            </Link>
          </li>
        </ul>
      </div>
    );
    return (
      <div className="navbar">
        <nav className="container-nav container-nav-sm">
          <div className="col-brand brand">
            <Link to="/">
              <h1>EPIC Mail</h1>
            </Link>
          </div>
          {isAuthenticated ? auth : guest}
        </nav>
      </div>
    );
  }
}

index.propTypes = {
  auth: PropTypes.object.isRequired,
  history: PropTypes.object,
  logout: PropTypes.func.isRequired,
  clearProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout, clearProfile }
)(index);
