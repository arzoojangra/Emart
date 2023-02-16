import React, { Component } from "react";
import "./Template3.css";

function Template3() {
  return (
    <div>
      <div className="header">Header</div>
      <div className="component1">
        <div className="box-1">This is box 1</div>
        <div className="box-2">
          <p
            style={{
              backgroundColor: "blue",
              padding: "10px",
              width: "100%",
            }}
          >
            This is box 2
          </p>
          <div className="lines">This is line1</div>
          <div className="lines"> This is line2</div>
          <div className="box-3">This is box3</div>
        </div>
      </div>

      <div className="component2">
        <div className="product">
          <div className="box">This is box</div>
          <div className="name">Item name</div>
          <div className="description">This is content</div>
          <div className="description">This is content</div>
        </div>
        <div className="product">
          <div className="box">This is box</div>
          <div className="name">Item name</div>
          <div className="description">This is content</div>
          <div className="description">This is content</div>
        </div>
        <div className="product">
          <div className="box">This is box</div>
          <div className="name">Item name</div>
          <div className="description">This is content</div>
          <div className="description">This is content</div>
        </div>
      </div>

      <div className="component1">
        <div className="circle">Circle </div>
        <div className="box-2">
          <p
            style={{
              backgroundColor: "blue",
              padding: "10px",
              width: "100%",
            }}
          >
            This is box 2
          </p>
          <div className="lines">This is line1</div>
          <div className="lines"> This is line2</div>
          <div className="box-3">This is box3</div>
        </div>
      </div>

      <div className="footer">
        <div className="left">Left-box</div>
        <div className="right">
          <div className="right-line">right-box</div>
          <div className="right-line">right-box</div>
          <div className="right-line">right-box</div>
        </div>
      </div>
    </div>
  );
}

export default Template3;
