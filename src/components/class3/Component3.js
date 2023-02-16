import React, { Component } from "react";

class NewComponent3 extends Component {
  constructor(props) {
    super(props);
  }
  state = { data: [] };

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/photos").then((pic) =>
    //   pic.json().then((json) => {
    //     this.setState({ data: json });
    //     console.log(json); //for checking was the data transfered
    //   })
    // );

    fetch("https://fakestoreapi.com/products").then((pic) =>
      pic.json().then((json) => {
        this.setState({ data: json });
        console.log(json); //for checking was the data transfered
      })
    );
  }
  render() {
    return (
      <div className="container">
        {/* 19th January 2023
        <br />
        <br />
        Third Component
        <br />
        <br />
        API Calling
        <br />
        <br />
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>Album ID</th>
              <th>Item Title</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((photos, index) => (
              <tr key={photos.id}>
                <td>{photos.id}</td>
                <td>{photos.title}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
        19th January 2023
        <br />
        <br />
        Third Component
        <br />
        <br />
        API Calling
        <br />
        <br />
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Description</th>
              <th>Price</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((products, index) => (
              <tr key={products.id}>
                <td>
                  <img src={products.image} width="100px" />
                </td>
                <td>{products.title}</td>
                <td>{products.category}</td>
                <td>{products.description}</td>
                <td>{products.price}</td>
                <td>{products.rating.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default NewComponent3;
