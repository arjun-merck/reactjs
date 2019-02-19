import React from "react";
import "./_NotificationBar.css";

/**
 * This component renders notification message.
 * The component receives the message to be displayed and classname for styling as an input prop.
 */
class NotificationBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { className, message } = this.props;
    className = "notification-bar " + className;
    return <div className={className}>{message}</div>;
  }
}

export default NotificationBar;
