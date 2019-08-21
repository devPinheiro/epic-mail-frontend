import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class index extends Component {
  render() {
    const { openNav } = this.props.nav;
    return (
      <React.Fragment>
        <div className={`col-1 sidebar ${openNav ? "open-sidebar" : ""} `}>
          <div className="app_name">
            <h1 className="text-center text-light">EPIC Mail</h1>

            <hr />
          </div>

          <div className="s_link">
            <ul className=" app-link">
              <li>
                <Link className="item" to="/dashboard">
                  <i className="ion-ios-filing-outline icon-lg-nav"></i>{" "}
                  <span>Inbox</span>{" "}
                </Link>
              </li>
              <li>
                <Link className="item" to="/sent">
                  <i className="ion-ios-email-outline icon-lg-nav "></i> Sent{" "}
                </Link>
              </li>
              <li>
                <Link className="item" to="/dashboard">
                  <i className="ion-ios-box-outline icon-lg-nav"></i> Draft{" "}
                </Link>
              </li>
              <li>
                <Link className="item" to="/dashboard">
                  <i className="ion-ios-people-outline icon-lg-nav"></i> Groups
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

index.propTypes = {
  nav: PropTypes.object
};

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(index);
