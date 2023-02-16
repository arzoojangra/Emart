import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "./Stylesheet/Cart.css";

function Cart(props) {
  const { cart, setCart } = useContext(CartContext);

  const handleAddMore = (item) => {
    const findItem = cart.find((element) => element.id === item.id);
    if (findItem) {
      const updatedProduct = cart.map((product) =>
        product.id === item.id ? { ...product, qty: product.qty + 1 } : product
      );
      setCart(updatedProduct);
      localStorage.setItem("localCart", JSON.stringify(updatedProduct));
    }
  };

  const handleRemove = (item) => {
    const findItem = cart.find((element) => element.id === item.id);
    if (findItem && findItem.qty === 1) {
      const updatedProduct = cart.filter((product) => product.id !== item.id);
      setCart(updatedProduct);
      localStorage.setItem("localCart", JSON.stringify(updatedProduct));
      alert("Item removed from cart!");
    } else {
      const updatedProduct = cart.map((product) =>
        product.id === item.id ? { ...product, qty: product.qty - 1 } : product
      );
      setCart(updatedProduct);
      localStorage.setItem("localCart", JSON.stringify(updatedProduct));
    }
  };

  const handleTotalAmount = () => {
    return cart.reduce((a, b) => a + b.price * b.qty, 0);
  };

  return (
    <div className="cart">
      {cart.length > 0 ? (
        <div>
          {cart.map((product) => (
            <div className="item-lists" key={product.id}>
              <div className="item-image">
                <img src={product.image} alt="" />
              </div>

              <div className="item-desc">
                <div className="cart-title">{product.title}</div>
                <div className="cart-desc">Quantity: {product.qty}</div>
                <div className="cart-desc">Price: ${product.price}</div>

                <div className="cart-desc">
                  <b>Amount: </b>
                  {product.qty} X ${product.price} = $
                  {product.qty * product.price}
                </div>
                <div>
                  <button
                    className="cart-buttons"
                    onClick={() => handleAddMore(product)}
                  >
                    Add more
                  </button>

                  <button
                    className="cart-buttons"
                    onClick={() => handleRemove(product)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="total">
            Amount to be paid: ${handleTotalAmount().toFixed(2)}
          </div>
        </div>
      ) : (
        <div className="cart-empty"> Your cart is empty!!!</div>
      )}
    </div>
  );
}

export default Cart;
