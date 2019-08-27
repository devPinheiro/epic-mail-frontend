/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import List from "../../../components/List";
import { sent } from "../../../actions/sent.action";

export class index extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      serverError: {}
    };
  }
  componentWillMount() {
    this.setState({ loading: true });
    this.props.sent();
  }
  render() {
    const { openNav } = this.props.nav;
    const messages = this.props.messages;
    return (
      <React.Fragment>
        <div className={`app ${openNav ? "collapsePane" : ""}`}>
          <section className="mail-app compose-mail">
            <div className="app-title container-grid-mail-action">
              <span>
                <h4> Sent</h4>
              </span>

              <div className="text-right mail-action-btn">
                <span id="delete">
                  {/* <i className="ion-ios-trash-outline icon-lg"></i> */}
                </span>
              </div>
            </div>

            <div className="mail-section">
              {messages ? (
                messages.map((item, i) => {
                  return <List {...item} key={i} />;
                })
              ) : (
                <h5 className="text-center">Loading...</h5>
              )}
            </div>
          </section>

          {/* <!--  --> */}
          <Link to="/compose" className="floating_btn">
            <i className="ion-ios-compose-outline icon-lg"></i>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

index.propTypes = {
  nav: PropTypes.object,
  sent: PropTypes.func,
  messages: PropTypes.any
};

const mapStateToProps = state => ({
  nav: state.nav,
  messages: state.sent.sentMails
});

export default connect(
  mapStateToProps,
  { sent }
)(index);
