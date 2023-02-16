import React, { Component } from "react";

class NewComponent extends Component {
  constructor(props) {
    super(props);
    // console.log("Constructor called!");
  }
  state = {
    count: 60,
    users: [
      { name: "Tucker", age: 4 },
      { name: "Todd", age: 2 },
      { name: "Lucy", age: 2 },
      { name: "Max", age: 5 },
      { name: "Gator", age: 4 },
    ],
  };

  componentDidMount() {
    // console.log("componentDidMount called!");
  }
  render() {
    // console.log("Render called!");
    return (
      <div className="container">
        19th January 2023
        <br />
        <br />
        First Component
        <br />
        <br />
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>
                <b>Name</b>
              </th>
              <th>
                <b>Age</b>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user, index) => (
              <tr>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default NewComponent;
