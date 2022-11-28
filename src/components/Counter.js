import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  addCount() {
    this.setState({ count: this.state.count + 1 }, () => {
      console.log("callback log", this.state.count);
    });
    console.log("sync", this.state.count);
  }

  render() {
    return (
      <>
        <div style={{ fontSize: "40px" }}>Counter: {this.state.count}</div>
        <button
          onClick={() => this.addCount()}
          style={{ height: "50px", width: "100px" }}
        >
          Add
        </button>
      </>
    );
  }
}

export default Counter;
