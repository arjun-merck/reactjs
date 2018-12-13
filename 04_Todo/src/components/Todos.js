import React from 'react';
import Todo from './Todo';

class Todos extends React.Component {
  state = {
    todos: [
      { id: 1, label: 'One' },
      { id: 2, label: 'Two' }]
  };

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    this.setState({ todos: this.state.todos.reverse() });
  }

  render() {
    const todos = this.state.todos.map(
      (todo) => {
        return <Todo key={todo.id} todo={todo} />
      }
    );

    return (
      <ul>
        {todos}
      </ul>
    );
  };


};

export default Todos;