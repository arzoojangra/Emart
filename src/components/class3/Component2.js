import React, { Component } from "react";

class NewComponent2 extends Component {
  constructor(props) {
    super(props);
  }
  state = { data: [] };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums").then((res) =>
      res.json().then((json) => {
        this.setState({ data: json });
        console.log(json); //for checking was the data transfered
      })
    );
  }

  render() {
    return (
      <div className="container">
        19th January 2023
        <br />
        <br />
        Second Component
        <br />
        <br />
        API Calling using fetch
        <br />
        <br />
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Item Title</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((albums, index) => (
              <tr key={albums.id}>
                <td>{albums.id}</td>
                <td>{albums.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default NewComponent2;
