import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/counter';
import { composeWithDevTools } from "redux-devtools-extension";

import './index.css';

import Counter from './components/Counter';

const store = createStore(
  rootReducer, 0, composeWithDevTools()
);

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root'));
