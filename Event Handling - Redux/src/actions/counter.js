//ACTION TYPES
export const ACTION_TYPE_INCREMENT = 'INCREMENT';
export const ACTION_TYPE_DECREMENT = 'DECREMENT';

//Action Creators
export const increment = () =>{
  return {
    type:ACTION_TYPE_INCREMENT
  }
}

export const decrement = () => {
  return{
    type:ACTION_TYPE_DECREMENT
  }
}
