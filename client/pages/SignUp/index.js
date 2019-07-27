import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { signUp } from "../../actions/auth.action";
import { SignUpValidator } from "../../validation/auth.validation";
import Button from "../../components/Button";
import InputForm from "../../components/InputForm";

class index extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      recoveryEmail: "",
      validationErrors: {},
      serverErrors: {},
      isSubmitting: false
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
      SignUpValidator.validateSync(this.state, {
        abortEarly: false
      });
    } catch (error) {
      console.log(error.inner);
      this.setState({ validationErrors: error.inner ? error : "" });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.handleBlur();
    this.setState({ isSubmitting: true });
    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      recoveryEmail: this.state.recoveryEmail
    };
    this.props.signUp(data, this.props.history);
    e.target.firstName.value = "";
    e.target.lastName.value = "";
    e.target.email.value = "";
    e.target.password.value = "";
    e.target.recoveryEmail.value = "";
    this.setState({ isSubmitting: false });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ serverErrors: nextProps.errors });
    }
  }
  render() {
    const errors = this.state.validationErrors;
    const { serverErrors } = this.state;
    const { isSubmitting } = this.state;
    return (
      <div className="container-signup">
        <div className="col-sp-2" />
        <div className="col-sp-1">
          <div id="signup_cont" className="signup  form col-1-lg">
            <h1>Get started here!</h1>
            {serverErrors.message}
            <form id="signup-form" onSubmit={this.handleSubmit}>
              <InputForm
                type="text"
                errors={errors.inner}
                handleChange={this.handleChange}
                label="First Name"
                name="firstName"
                handleBlur={this.handleBlur}
                id="fname"
                values={this.state.firstName}
              />

              <InputForm
                type="text"
                handleChange={this.handleChange}
                label="Last Name"
                name="lastName"
                id="lname"
                values={this.state.lastName}
                handleBlur={this.handleBlur}
                errors={errors.inner}
              />

              <InputForm
                type="email"
                handleChange={this.handleChange}
                label="Email"
                name="email"
                id="email"
                values={this.state.email}
                handleBlur={this.handleBlur}
                errors={errors.inner}
              />

              <InputForm
                type="password"
                handleChange={this.handleChange}
                label="Password"
                name="password"
                id="password"
                values={this.state.password}
                handleBlur={this.handleBlur}
                errors={errors.inner}
              />

              <InputForm
                type="email"
                handleChange={this.handleChange}
                label="Recovery Email"
                name="recoveryEmail"
                id="recoveryEmail"
                values={this.state.recoveryEmail}
                handleBlur={this.handleBlur}
                errors={errors.inner}
              />

              <Button isSubmitting={isSubmitting}> Sign Up </Button>
            </form>

            <div className="signup_options">
              <p>
                Already have an account?{" "}
                <span className="login_action">
                  <a href="login.html">Sign in</a>
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

index.propTypes = {
  signUp: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  history: PropTypes.object,
  errors: PropTypes.object
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { signUp }
)(withRouter(index));
