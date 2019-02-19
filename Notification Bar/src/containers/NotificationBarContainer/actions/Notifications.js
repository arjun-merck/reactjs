import {
  WARNING,
  INFO,
  ERROR
} from "../../../components/NotificationBar/NotificationType";

/**
 * Notification Action Constants
 */
export const NOTIFICATION_DISPLAY_WARNING = "NOTIFICATION_DISPLAY_WARNING";
export const NOTIFICATION_CLEAR_WARNING = "NOTIFICATION_CLEAR_WARNING";
export const NOTIFICATION_DISPLAY_INFORMATION =
  "NOTIFICATION_DISPLAY_INFORMATION";
export const NOTIFICATION_DISPLAY_ERROR = "NOTIFICATION_DISPLAY_ERROR";

/**
 * Action creator to display a warning notifcation
 * @param {String} message
 */
export const notifyWarning = message => {
  return {
    type: NOTIFICATION_DISPLAY_WARNING,
    payload: {
      message,
      type: WARNING
    }
  };
};

/**
 * Action creator to clear a warning notifcation
 */
export const notifyClearWarning = () => {
  return {
    type: NOTIFICATION_CLEAR_WARNING
  };
};

/**
 * Action creator to display an information notifcation
 * @param {String} message
 */
export const notifyInfo = message => {
  return {
    type: NOTIFICATION_DISPLAY_INFORMATION,
    payload: {
      message,
      type: INFO
    }
  };
};

/**
 * Action creator to display an error notifcation
 * @param {String} message
 */
export const notifyError = message => {
  return {
    type: NOTIFICATION_DISPLAY_ERROR,
    payload: {
      message,
      type: ERROR
    }
  };
};
