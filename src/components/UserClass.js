import React, { Component } from "react";

class UserClass extends Component {
  render() {
    return <h3>Hello {this.props.name}</h3>;
  }
}

export default UserClass;
