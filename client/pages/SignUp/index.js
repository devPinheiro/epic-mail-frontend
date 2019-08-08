import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
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
      SignUpValidator.validateSync(this.state, {
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
        password: this.state.password
      };
      this.props.signUp(data, this.props.history);
    }
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
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
          <div id="signup_cont" className="signup  form col-1-lg">
            <h1>Get started here!</h1>
            <form id="signup-form" onSubmit={this.handleSubmit}>
              <InputForm
                type="text"
                errors={errors}
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
                errors={errors}
              />
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

              <Button isSubmitting={isSubmitting}> Sign Up </Button>
            </form>

            <div className="signup_options">
              <p>
                Already have an account?{" "}
                <span className="login_action">
                  <Link to="/login">Sign in</Link>
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
