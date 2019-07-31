import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { login } from "../../actions/auth.action";
import { LoginValidator } from "../../validation/auth.validation";
import Button from "../../components/Button";
import InputForm from "../../components/InputForm";

class index extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      validationErrors: {},
      isSubmitting: false,
      serverError: {}
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
      LoginValidator.validateSync(this.state, {
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
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        recoveryEmail: this.state.recoveryEmail
      };
      this.props.login(data, this.props.history);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      // redirect
      this.props.history.push("/dashboard");
    }
    if (nextProps.errors) {
      this.setState({ serverError: nextProps.errors.serverError });
      this.setState({ isSubmitting: false });
    }
  }

  render() {
    const errors = this.state.validationErrors;
    const { isSubmitting } = this.state;
    return (
      <div className="container-signup">
        <div className="col-sp-2" />
        <div className="col-sp-1">
          <div id="signup_cont" className="login  form col-1-lg">
            <h1>Take a peep into your account!</h1>
            <form id="signup-form" onSubmit={this.handleSubmit}>
              <InputForm
                type="email"
                handleChange={this.handleChange}
                label="Email"
                name="email"
                id="email"
                values={this.state.email}
                handleBlur={this.handleBlur}
                errors={!errors ? this.state.serverError : errors}
              />

              <InputForm
                type="password"
                handleChange={this.handleChange}
                label="Password"
                name="password"
                id="password"
                values={this.state.password}
                handleBlur={this.handleBlur}
                errors={errors}
              />

              <Button isSubmitting={isSubmitting}> Login </Button>
            </form>

            <div className="signup_options">
              <p>
                Don't have an account account?{" "}
                <span className="signup_action ">
                  <Link to="/signup">Sign up </Link>
                </span>{" "}
              </p>
            </div>
            <div className="signup_options text-center">
              <p>
                <span className="login_action">
                  <Link to="/reset-password">Forgot your password? </Link>
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
  login: PropTypes.func.isRequired,
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
  { login }
)(withRouter(index));
