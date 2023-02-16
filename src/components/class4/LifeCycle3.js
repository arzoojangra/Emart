import React, { Component } from "react";

class LifeCycle3 extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    show: true,
  };
  render() {
    return (
      <div className="container">
        <b>LifeCycle 3rd phase: Unmounting</b>
        <br />
        <br />
        <b>- componentWillUnmount()</b>
        <p>
          when a component is removed from the DOM, or unmounting as React likes
          to call it.
        </p>
        <br />
        <br />
        Users list
        <br />
        <br />
        <button
          onClick={() => {
            this.setState({ show: false });
          }}
        >
          Click to hide
        </button>
        {this.state.show ? <Users /> : null}
      </div>
    );
  }
}

export default LifeCycle3;

class Users extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  componentWillUnmount() {
    console.log("....componentWillUnmount");
    alert("Users list was removed!!!!");
  }
  render() {
    return <div className="container">This is the users list: </div>;
  }
}
