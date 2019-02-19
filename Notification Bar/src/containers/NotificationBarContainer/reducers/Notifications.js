import {
  NOTIFICATION_DISPLAY_WARNING,
  NOTIFICATION_CLEAR_WARNING,
  NOTIFICATION_DISPLAY_INFORMATION,
  NOTIFICATION_DISPLAY_ERROR
} from "../../../containers/NotificationBarContainer/actions/Notifications";

/**
 * Notifications action reducer
 * @param {Object} state
 * @param {Object} action
 */
export const notifications = (state = {}, action) => {
  switch (action.type) {
    case NOTIFICATION_DISPLAY_WARNING:
    case NOTIFICATION_DISPLAY_INFORMATION:
    case NOTIFICATION_DISPLAY_ERROR:
      return {
        ...state,
        message: action.payload.message,
        type: action.payload.type
      };
    case NOTIFICATION_CLEAR_WARNING:
      return {
        ...state,
        message: "",
        type: ""
      };

    default:
      return state;
  }
};

export default notifications;
