import React from "react";
import moment from "moment";
import PropTypes from "prop-types";

const List = props => {
  return (
    <div>
      <div className={`box ${props.status} `}>
        <div className="mail-action">
          <input
            type="checkbox"
            className="inbox-checkout"
            name="mail_action"
            id="mail_action"
          />
        </div>

        <div className="box-top">
          <span className="title">{props.title}</span>
          <span className="date">{moment(props.created_on).fromNow()}</span>
          <div className="box-body">
            <p className="subject">{props.subject}</p>

            <span className="body text-muted">{props.message}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

List.propTypes = {
  subject: PropTypes.string,
  title: PropTypes.string,
  created_on: PropTypes.string,
  message: PropTypes.string,
  status: PropTypes.string,
  props: PropTypes.object
};
export default List;
