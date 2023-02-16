import React, { Component } from "react";

class LifeCycle2 extends Component {
  constructor(props) {
    super(props);
    console.log("....Constructor");

    this.state = {
      num: 10,
      show: true,
    };
  }

  componentDidMount = () => {
    console.log("....componentDidMount");
    this.numberDecrease();
  };

  componentDidUpdate = () => {
    console.log("....componentDidUpdate");
    this.numberDecrease();
  };

  numberDecrease = () => {
    if (this.state.num > 0) {
      setTimeout(() => {
        this.setState({ num: this.state.num - 1 });
      }, 1000);
    }
  };

  render() {
    console.log("....Render");

    return (
      <div className="container">
        20 January 2023
        <br />
        Module 2<br />
        <br />
        <ul>
          <b>LifeCycle 2nd phase: Updating</b>
          <br />
          <br />
          <li>
            componentDidMount():
            <p>Called whenever a component is updated</p>
          </li>
        </ul>
        <br />
        <br />
        Number -{">"} {this.state.num}
        <br />
        <br />
        The number wil keep on decreasing till its 0.
        <br />
        <br />
        <button
          onClick={() =>
            this.setState({
              num: this.state.num + 1,
            })
          }
        >
          Click to increase
        </button>
      </div>
    );
  }
}

export default LifeCycle2;
