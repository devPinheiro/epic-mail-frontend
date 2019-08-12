/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import InputForm from "../../../components/InputForm";
import Button from "../../../components/Button";
import { composeMail } from "../../../actions/composeMail.action";
import { mailValidator } from "../../../validation/auth.validation";
export class index extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      subject: "",
      mail_body: "",
      isSubmitting: false,
      serverError: {},
      success: "",
      validationErrors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleBlur() {
    try {
      mailValidator.validateSync(this.state, {
        abortEarly: false
      });
      this.setState({ validationErrors: null });
    } catch (error) {
      if (!error) this.setState({ validationErrors: "" });

      const formatError = {};
      error.inner.forEach(error => (formatError[error.path] = error.message));

      this.setState({ validationErrors: formatError });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.handleBlur();
    const { validationErrors } = this.state;
    if (!validationErrors) {
      this.setState({ isSubmitting: true });
      const data = {
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.mail_body
      };
      this.props.composeMail(data, this.props.history);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ serverError: nextProps.errors });
      this.setState({ isSubmitting: false });
    }
    if (nextProps.success) {
      this.setState({ success: nextProps.success });
      this.setState({ isSubmitting: false });
    }
  }

  render() {
    const errors = this.props.errors;
    const validator = this.state.validationErrors;
    const success = this.props.success;
    const { openNav } = this.props.nav;
    const { isSubmitting } = this.state;
    return (
      <div>
        <div className="col-2 main">
          <div className={`app ${openNav ? "collapsePane" : ""}`}>
            <section className="mail-app compose-mail">
              <div className="app-title">
                <h4> Compose New Mail</h4>
              </div>

              {errors ? <span className="red">{errors}</span> : ""}
              {success ? <span className="green">{success}</span> : ""}

              <form className="compose-mail-form" onSubmit={this.handleSubmit}>
                <div id="receiverInput" className="form-g">
                  <InputForm
                    type="email"
                    errors={validator}
                    handleChange={this.handleChange}
                    handleBlur={this.handleBlur}
                    label="Recipient (email)"
                    name="email"
                    id="receiver_email"
                    values={this.state.recipient}
                  />
                </div>
                <div className="form-g">
                  <InputForm
                    type="text"
                    errors={validator}
                    handleChange={this.handleChange}
                    handleBlur={this.handleBlur}
                    label="Subject"
                    name="subject"
                    id="subject"
                    values={this.state.subject}
                  />
                </div>

                <div className="form-g">
                  <InputForm
                    inputtype="textarea"
                    errors={validator}
                    handleChange={this.handleChange}
                    handleBlur={this.handleBlur}
                    label="Mail Body"
                    name="mail_body"
                    id="mail_body"
                    classes=""
                    cols="30"
                    rows="15"
                    values={this.state.mail}
                  />
                </div>

                <div className="form-g">
                  <Button
                    className="btn btn-primary"
                    isSubmitting={isSubmitting}
                  >
                    {" "}
                    Send
                  </Button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
index.propTypes = {
  composeMail: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  history: PropTypes.object,
  errors: PropTypes.string,
  nav: PropTypes.object,
  success: PropTypes.string
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.mail.serverErrors,
  nav: state.nav,
  success: state.mail.success
});

export default connect(
  mapStateToProps,
  { composeMail }
)(index);
