//Class component

import React, { Component } from "react";
import Message from "./Message";
class Component1 extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    name: "Tucker",
    age: 4,
    color1: "red",
  };

  toggleColor = () => {
    if (this.state.color1 == "red") this.setState({ color1: "green" });
    else this.setState({ color1: "red" });
  };

  toggleName = () => {
    if (this.state.name == "Tucker") this.setState({ name: "Todd" });
    else this.setState({ name: "Tucker" });
  };
  render() {
    return (
      <>
        <div className="container">
          <b>This all done using class components!!</b>
          <br />
          <br />
          Showing state values:
          <br />
          Name: {this.state.name}
          <br />
          Age: {this.state.age}
          <br />
          Color1: {this.state.color1}
          <br />
          <br />
          <button onClick={() => this.toggleName()}>Change Name</button>
          <br />
          <br />
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: this.state.color1,
            }}
          >
            This is colorBox
          </div>
          <br />
          <button onClick={() => this.toggleColor()}>Change Color</button>
          <br />
          <br />
          Using props: sending arguements to message file!
          <br />
          <Message name="Linda"></Message>
        </div>
      </>
    );
  }
}

export default Component1;
