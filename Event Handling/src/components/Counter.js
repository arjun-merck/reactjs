import React from 'react';
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
      return {count: ++state.count};
    });
  }
  
  decrement = () => {
    this.setState(state => ({ count: --state.count }));
  }

  render() {
    return (
      <div className="wrapper">
        <button className="incBtn btn" onClick={this.increment}>+</button>
        {/* <button className="incBtn btn" onClick={() => this.increment()}>+</button> */}
        <span className="count">{this.state.count}</span>
        <button className="decBtn btn" onClick={this.decrement}>-</button>
      </div>
    );
  }


}


