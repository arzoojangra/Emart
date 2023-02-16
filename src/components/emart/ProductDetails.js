import React, { useContext, useEffect, useState } from "react";
import "./Stylesheet/ProductDetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { CartContext } from "./CartContext";

function ProductDetails(props) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, []);

  if (!product) {
    return <p className="loading">Loading...</p>;
  }

  const handleAddToCart = async (item) => {
    const findItem = cart.find((element) => element.id === item.id);

    if (!findItem) {
      const update = [...cart, { ...item, qty: 1 }];
      await setCart([...cart, { ...item, qty: 1 }]);
      localStorage.setItem("localCart", JSON.stringify(update));
      alert("Item added to Cart!");
    } else alert("Already added to cart! Go to cart to add more!");
  };

  return (
    <div>
      <div className="product-details">
        <div className="product-image">
          <img src={`${product.image}`} />
        </div>
        <div className="details">
          <div className="prod-title">{product.title}</div>

          <div className="prod-description">{product.description}</div>

          <div className="prod-price">$ {product.price}</div>

          <div className="rating">
            <div className="prod-rating">
              <StarRoundedIcon
                fontSize="large"
                style={{ color: "rgb(255, 217, 0)" }}
              />
              {product.rating.rate}/5
            </div>

            <div className="rated-by">
              Rated by: {product.rating.count} users
            </div>
          </div>

          <button
            className="buy-button"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
