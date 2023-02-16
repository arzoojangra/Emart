import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Stylesheet/Header.css";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import EmojiObjectsRoundedIcon from "@mui/icons-material/EmojiObjectsRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import ConnectWithoutContactRoundedIcon from "@mui/icons-material/ConnectWithoutContactRounded";
import { CartContext } from "./CartContext";

function Header(props) {
  const { cart } = useContext(CartContext);

  return (
    <div className="header">
      <h1>
        <Link className="emart-logo" to="/">
          <img src="./emart.png" height="50px" />
        </Link>
      </h1>

      <div className="menu">
        <button>
          <HomeRoundedIcon />
          <NavLink to="/">Home</NavLink>
        </button>

        <button>
          <EmojiObjectsRoundedIcon />
          <NavLink to="/about">About</NavLink>
        </button>

        <button>
          <CategoryRoundedIcon />
          <NavLink to="/products">Products</NavLink>
        </button>

        <button>
          <ConnectWithoutContactRoundedIcon />
          <NavLink to="/contact">Contact Us</NavLink>
        </button>
      </div>

      <div className="login-menu">
        <button>
          <LoginRoundedIcon />
          <NavLink to="/login">Login</NavLink>
        </button>

        <button>
          <HowToRegRoundedIcon />
          <NavLink to="/register">Register</NavLink>
        </button>

        <button>
          <ShoppingCartRoundedIcon />
          <NavLink to="/cart">Cart({cart.length})</NavLink>
        </button>
      </div>
    </div>
  );
}

export default Header;
