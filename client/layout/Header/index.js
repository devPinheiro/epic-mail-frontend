import React, { Component } from "react";
import { Link } from "react-router-dom";

export class index extends Component {
  render() {
    return (
      <div className="navbar">
        <nav className="container-nav container-nav-sm">
          <div className="col-brand brand">
            <Link to="/">
              <h1>EPIC Mail</h1>
            </Link>
          </div>

          <div className="col-navlink linker">
            <ul className="nav-link">
              <li className="btn-item">
                <Link to="/login" className="btn-signin">
                  Sign in
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default index;
