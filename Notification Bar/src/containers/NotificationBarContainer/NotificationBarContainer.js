import React from "react";
import { connect } from "react-redux";
import NotificationBar from "../../components/NotificationBar/NotificationBar";
import {
  WARNING,
  ERROR,
  INFO
} from "../../components/NotificationBar/NotificationType";

import { notifyClearWarning } from "./actions/Notifications";

/**
 * Container for Notification Bar
 * Handles the Rendering logic and timeout for notifications.
 *
 */
class NotificationBarContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  /**
   * Method to start the timer, postTimer function will be called after timeout
   */
  startTimer = () => {
    this.timeOutRef = setTimeout(
      this.postTimer,
      this.props.notification.timeout
    );
  };

  /**
   * Method to clear the existing timer
   */
  clearTimer = () => {
    clearTimeout(this.timeOutRef);
  };

  /**
   * Method that will be executed post timeout.
   * The notification is cleared when timeout occurs.
   */
  postTimer = () => {
    this.props.notifyClearWarning();
  };

  /**
   * The method that will return the notification bar display component.
   * Notification bar shall be displayed for ERROR, INFO & WARNING case
   * When notification type is empty, no notification bar shall be displayed.
   *
   * This method also clears any existing timer and starts timer for
   * notification types ERROR and INFO
   *
   * Notification type WARNING is non-dismissible.
   */
  displayNotificationBar = () => {
    if (this.props.notification.type !== "") {
      let className = "";
      this.clearTimer();
      switch (this.props.notification.type) {
        case WARNING:
          className = "warning-bar";
          break;
        case ERROR:
          className = "error-bar";
          this.startTimer();
          break;
        case INFO:
          className = "information-bar";
          this.startTimer();
          break;
        default:
          break;
      }

      return (
        <NotificationBar
          className={className}
          message={this.props.notification.message}
        />
      );
    } else {
      return null;
    }
  };

  render() {
    return this.displayNotificationBar();
  }
}

const mapStateToProps = state => {
  return {
    notification: state.notification
  };
};

export default connect(
  mapStateToProps,
  { notifyClearWarning }
)(NotificationBarContainer);
