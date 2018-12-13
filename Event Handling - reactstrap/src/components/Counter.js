import React from 'react';
import { Button } from 'reactstrap';
import './Counter.css'

export default class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState(function (state) {
      return { count: ++state.count };
    });
  }

  decrement = () => {
    this.setState(state => ({ count: --state.count }));
  }

  render() {
    return (
      <div className="wrapper">
        <Button color="success" onClick={this.increment}>+</Button>
        <span className="count">{this.state.count}</span>
        <Button color="warning" onClick={this.decrement}>-</Button>
      </div>
    );
  }


}


