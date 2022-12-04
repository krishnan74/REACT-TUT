import React, { Component } from "react";
class Counter extends Component {
  state = {
    St: "Username",
    count: 1,
  };

  render() {
    return (
      <React.Fragment>
        <h1>{this.func()}</h1>
        <a>Click here</a>
        <p>{this.state.count}</p>
      </React.Fragment>
    );
  }

  func() {
    const { count } = this.state;
    if (count === 0) {
      return "Zero";
    } else {
      return count;
    }
  }
}

export default Counter;
