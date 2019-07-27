import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="container-main">
        <div className="container-grid-2 hero">
          <div className="col-1 hero-l">
            <h1 className="text-light title">
              Create Mails conveniently
              <br /> using EPIC Mail
            </h1>
            <p className="text-light">
              You can have the best experience just from this app <br />
              enjoy the richness of email communication
            </p>

            <div className="btn_cta">
              <Link to="/signup" className="btn-hero">
                Get Started
              </Link>
            </div>
          </div>

          <div className="col-2 hero-r">
            <div className="hero-img">
              <img src="../../../public/images/data.png" alt="" />
            </div>
          </div>
        </div>

        <div className="container-grid-2 section_a">
          <div className="col-1 hero-r">
            <div className="hero-img text-center">
              <img alt="" src="../../../public/images/undraw_emails_6uqr.png" />
            </div>
          </div>

          <div className="col-2 hero-r">
            <h1 className="title">
              Mailing platform that works! User experience focused
            </h1>

            <p className="text-muted">
              You can have the best experience just from this app <br />
              enjoy the richness of email communication
            </p>
          </div>
        </div>

        <div className="container-grid-2 section_b">
          <div className="col-1 hero-l">
            <h1 className="title">
              Create Mails conveniently
              <br /> using EPIC Mail
            </h1>

            <p className="text-muted">
              You can have the best experience just from this app <br />
              enjoy the richness of email communication
            </p>
          </div>

          <div className="col-2 hero-r">
            <div className="hero-img text-center">
              <img
                alt=""
                src="../../../public/images/undraw_message_sent_1030.png"
              ></img>
            </div>
          </div>
        </div>

        <div className="cta">
          <h1 className=" text-center">Create an account with us now</h1>
          <div className="text-center">
            <Link to="/signup" className="btn-hero">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
