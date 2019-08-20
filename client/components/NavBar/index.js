/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { openSidebar, closeSidebar } from "../../actions/nav.action";
import { clearProfile } from "../../actions/profile.action";
import { logout } from "../../actions/auth.action";

class index extends React.Component {
  constructor() {
    super();

    this.state = {
      profile: {},
      loading: false
    };

    this.handleOpenNav = this.handleOpenNav.bind(this);
    this.handleCloseNav = this.handleCloseNav.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleOpenNav() {
    this.props.openSidebar();
  }

  handleCloseNav() {
    this.props.closeSidebar();
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.clearProfile();
    this.props.logout(this.props.history);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState({ loading: nextProps.profile.loading });
    }
    if (!nextProps.profile.loading) {
      this.setState({ profile: nextProps.profile.profile.data });
    }
  }
  render() {
    const { openNav } = this.props.nav;
    const { first_name, email, image } = this.state.profile;
    return (
      <React.Fragment>
        <nav
          className={`container-nav navbar ${openNav ? "collapsePane" : ""}`}
        >
          <div className="col-brand  main-brand">
            {!openNav ? (
              <div className="menu ">
                <button onClick={this.handleOpenNav}>
                  <i className="ion-android-menu"></i>
                </button>
              </div>
            ) : (
              <div className="menu">
                <button onClick={this.handleCloseNav}>
                  <i className="ion-close-round "></i>
                </button>
              </div>
            )}

            <p>EPIC - All mails</p>
          </div>

          <div className="col-navlink link">
            <ul className=" nav-link">
              <div className="dropdown">
                <a href="#" className="dropdown_btn">
                  {" "}
                  <img
                    id="userProfile"
                    src={image ? image : ""}
                    alt=""
                    className="user"
                  />{" "}
                </a>
                <div className="dropdown-fill">
                  <div className="user_details">
                    <p id="user_name">{first_name ? first_name : ""}</p>
                    <p id="user_email">{email ? email : ""}</p>
                  </div>

                  <Link onClick={this.handleLogout} to="/" className="logout">
                    <i className="ion-log-out dropdown_icon"></i>Logout
                  </Link>
                </div>
              </div>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

index.propTypes = {
  openSidebar: PropTypes.func.isRequired,
  closeSidebar: PropTypes.func.isRequired,
  nav: PropTypes.object,
  profile: PropTypes.object,
  logout: PropTypes.func.isRequired,
  clearProfile: PropTypes.func.isRequired,
  history: PropTypes.object
};

const mapStateToProps = state => ({
  auth: state.auth,
  nav: state.nav,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { openSidebar, closeSidebar, logout, clearProfile }
)(withRouter(index));
