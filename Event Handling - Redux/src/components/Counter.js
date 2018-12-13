import React from 'react';
import './Counter.css'
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import { increment, decrement } from '../actions/counter';

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.props.increment();
  }

  decrement = () => {
    this.props.decrement();
  }

  render() {
    return (
      <div className="wrapper">
        <button className="incBtn btn" onClick={this.increment}>+</button>
        {/* <button className="incBtn btn" onClick={() => this.increment()}>+</button> */}
        <span className="count">{this.props.count}</span>
        <button className="decBtn btn" onClick={this.decrement}>-</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state
});

export default connect(mapStateToProps, { increment, decrement })(Counter);

/* const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ increment, decrement }, dispatch);
}

const connectFunc = connect(
  mapStateToProps,
  mapDispatchToProps
);

const connctedComponent = connectFunc(Counter);

export default connctedComponent; */