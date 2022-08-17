import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    // alert(props.incrementDecrementValue)
    // props are always immutable, u cannot change the read only value
    // props.incrementDecrementValue = 20
    // createing a state for Counter coponent with initial count of 0
    this.state = {
      count: 0,
      isDark: false,
      address: {
        city: "TJ",
        state: "TN",
      },
    };
  }

  incrementCounter = (event) => {
    this.setState({
      count: this.state.count + this.props.incrementDecrementValue,
    });
    this.props.handlerFunc(
      this.state.count + this.props.incrementDecrementValue
    );
  };

  decrementCounter = (event) => {
    this.setState({
      count: this.state.count - this.props.incrementDecrementValue,
    });
    this.props.handlerFunc(
      this.state.count - this.props.incrementDecrementValue
    );
  };

  changeCity = () => {

    this.setState({
      address: {
        ...this.state.address,
        city: "TVDM"
      },
    });
  };

  render() {
    return (
      <>
        <div>{`Counter value is ${this.state.count}`}</div>
        <div>
          <button onClick={this.incrementCounter}>Increment</button>
          <button onClick={this.decrementCounter}>Decrement</button>
          <button onClick={this.changeCity}>Change City</button>
        </div>
        <div>{`City is ${this.state.address.city} and state is ${this.state.address.state}`}</div>
      </>
    );
  }
}
