import React from "react";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Products from "./Products";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";
import Footer from "./Footer";
import Login from "./Login";
import Register from "./Register";
import Cart from "./Cart";
import ProductDetails from "./ProductDetails";
import { CartProvider } from "./CartContext";

function Website(props) {
  return (
    <CartProvider>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

      <Footer />
    </CartProvider>
  );
}

export default Website;
