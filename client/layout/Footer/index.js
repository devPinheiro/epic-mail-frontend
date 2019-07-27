import React, { Component } from "react";
import { Link } from "react-router-dom";

export class index extends Component {
  render() {
    return (
      <div>
        <div className="container-grid-footer footer">
          <div className="col-1">
            <ul className="nav-linl"></ul>
          </div>

          <div className="col-2">
            <ul className="nav-linl">
              <li className="item">
                <Link to="/">FAQ</Link>
              </li>

              <li className="item">
                <Link to="/">Privacy</Link>
              </li>
            </ul>
          </div>

          <div className="col-3">
            <ul className="nav-linl">
              <li className="item">
                <Link to="/">Facebook</Link>
              </li>
              <li className="item">
                <Link to="/">Twitter</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footy">
          <p className="text-muted text-center link">
            <small> @ EPIC 2019</small>
          </p>
        </div>
      </div>
    );
  }
}

export default index;
