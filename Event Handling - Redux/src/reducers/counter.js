import { ACTION_TYPE_INCREMENT, ACTION_TYPE_DECREMENT } from './../actions/counter';

//Reducers
const counter = (state, action) => {
  if (typeof state === 'undefined') {
    return 0;
  }
  if (action.type === ACTION_TYPE_INCREMENT) {
    return state + 1;
  } else if (action.type === ACTION_TYPE_DECREMENT) {
    return state - 1;
  } else {
    return state;
  }
};

export default counter;