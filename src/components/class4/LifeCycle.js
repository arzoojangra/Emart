import React, { Component } from "react";

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("1....Constructor");
  }
  state = {
    color: "pink",
  };

  static getDerivedStateFromProps(props) {
    console.log("2....getDerivedStateFromProps");
    return {
      color: props.color ? props.color : this.state.color,
    };
  }

  componentDidMount() {
    console.log("4....componentDidMount");
  }
  render() {
    console.log("3....Render");
    return (
      <div className="container">
        20 January 2023
        <br />
        <br />
        Lifecycle
        <br />
        <br />
        Props recieved:
        <br />
        Color = {this.state.color}
        <br />
        <br />
        <ol>
          <b>LifeCycle 1st phase: Mounting</b>
          <br />
          <br />
          <li>constructor</li>
          <li>getDerivedStateFromProps</li>
          <li>Render</li>
          <li>componentDidMount</li>
        </ol>
      </div>
    );
  }
}

export default LifeCycle;
