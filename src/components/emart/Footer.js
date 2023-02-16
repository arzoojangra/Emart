import React from "react";
import "./Stylesheet/Footer.css";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

function Footer(props) {
  return (
    <div className="footer">
      <img src="./emart.png" height="50px" />
      <div className="footer-condtn">
        <p>Conditions of Use & Sale</p>
        <p>Privacy Notice</p>
        <p> Interest-Based Ads</p>
      </div>
      © 1996-2023, Emart.com, Inc. or its affiliates
    </div>
  );
}

export default Footer;
