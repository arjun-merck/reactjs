import React from "react";
import { connect } from "react-redux";

import {
  notifyWarning,
  notifyClearWarning,
  notifyInfo,
  notifyError
} from "../containers/NotificationBarContainer/actions/Notifications";

class ButtonContainer extends React.Component {
  onClickError = () => {
    console.log("Error Clicked");
    this.props.notifyError("Error Clicked");
  };

  onClickWarning = () => {
    console.log("Warning Clicked");
    this.props.notifyWarning("Warning Clicked");
  };

  onClickInfo = () => {
    console.log("Info Clicked");
    this.props.notifyInfo("Info Clicked");
  };

  onClickClearWarning = () => {
    console.log("clear Warning Clicked");
    this.props.notifyClearWarning();
  };

  render() {
    return (
      <div>
        <button className="ui red button" onClick={() => this.onClickError()}>
          Error
        </button>
        <button
          className="ui orange button"
          onClick={() => this.onClickWarning()}
        >
          Warning
        </button>
        <button className="ui blue button" onClick={() => this.onClickInfo()}>
          Information
        </button>
        <button
          className="ui grey button"
          onClick={() => this.onClickClearWarning()}
        >
          Clear Warning
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { notifyWarning, notifyClearWarning, notifyInfo, notifyError }
)(ButtonContainer);
