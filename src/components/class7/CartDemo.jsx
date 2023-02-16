import React, { useState } from "react";
import "./CartDemo.css";

function CartDemo(props) {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Bag", price: 400 },
    { id: 2, name: "Bottle", price: 350 },
    { id: 3, name: "Pen", price: 15 },
    { id: 4, name: "Pencil", price: 10 },
    { id: 5, name: "Register", price: 45 },
    { id: 6, name: "Notebook", price: 35 },
    { id: 7, name: "Geometry", price: 120 },
    { id: 8, name: "Lunch-box", price: 250 },
    { id: 9, name: "Book", price: 160 },
    { id: 10, name: "Eraser", price: 5 },
  ];

  const handleAddToCart = (item) => {
    const findItem = cart.find((element) => element.id === item.id);

    if (!findItem) {
      setCart([...cart, { ...item, qty: 1 }]);
    } else alert("Already added to cart! Click on Add more to add more!");
  };

  console.log(cart);

  const handleAddMore = (item) => {
    const findItem = cart.find((element) => element.id === item.id);
    if (findItem) {
      const updatedProduct = cart.map((product) =>
        product.id === item.id ? { ...product, qty: product.qty + 1 } : product
      );
      setCart(updatedProduct);
    }
  };

  const handleRemove = (item) => {
    const findItem = cart.find((element) => element.id === item.id);
    if (findItem && findItem.qty === 1) {
      const updatedProduct = cart.filter((product) => product.id !== item.id);
      setCart(updatedProduct);
      alert("Item removed from cart!");
    } else {
      const updatedProduct = cart.map((product) =>
        product.id === item.id ? { ...product, qty: product.qty - 1 } : product
      );
      setCart(updatedProduct);
    }
  };

  return (
    <div id="cart-demo">
      <div className="header">Sonu Stationery</div>
      <div className="container">Products</div>
      <table className="table">
        <thead>
          <tr>
            <th className="row">Item Name</th>
            <th className="row">Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td className="row">{item.name}</td>
              <td className="row">{item.price}</td>
              <td>
                <button
                  className="buttons"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to cart
                </button>
              </td>
              <td>
                <button className="buttons" onClick={() => handleAddMore(item)}>
                  Add more
                </button>
              </td>
              <td>
                <button className="buttons" onClick={() => handleRemove(item)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CartDemo;
