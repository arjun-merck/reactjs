import React from 'react';

const Todo = (props) =>{
  return <li>{props.todo.label}</li>;
};

export default Todo;