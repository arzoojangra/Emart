import React, { useState, useEffect } from "react";
import "./Stylesheet/Products.css";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import axios from "axios";
import { Link } from "react-router-dom";

function Products(props) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((product) => {
      setProduct(product.data);
    });
  }, []);

  return (
    <div className="product-background">
      <div className="heading">Products</div>

      <div className="row">
        {product.map((item) => {
          return (
            <div className="product" key={item.id}>
              <div className="product-image">
                <Link to={`/products/${item.id}`}>
                  <img src={item.image} height="255px" />
                </Link>
              </div>

              <div className="details">
                <div className="title">{item.title}</div>
                <div className="price">
                  <AttachMoneyRoundedIcon />
                  <>{item.price}</>
                </div>
                <Link to={`/products/${item.id}`}>
                  <button className="buy-button">Buy Now</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
