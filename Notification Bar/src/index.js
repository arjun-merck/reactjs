import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./rootreducer/";
import { composeWithDevTools } from "redux-devtools-extension";
import ButtonContainer from "./containers/ButtonContainer";
import NotificationBarContainer from "./containers/NotificationBarContainer/NotificationBarContainer";

const initStore = {
  count: 0,
  notification: {
    message: "initStore",
    type: "",
    timeout: "10000"
  }
};

const store = createStore(rootReducer, initStore, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <ButtonContainer />
    <NotificationBarContainer />
  </Provider>,
  document.getElementById("root")
);
