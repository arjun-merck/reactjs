import { combineReducers } from "redux";
import notifications from "../containers/NotificationBarContainer/reducers/Notifications";

export default combineReducers({
  notification: notifications
});
