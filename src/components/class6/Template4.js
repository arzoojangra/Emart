import React, { Component } from "react";
import "./Template4.css";

function Template4() {
  return (
    <>
      <div className="header">
        <div className="headerleft">Left box</div>
        <div className="headerright">
          <div className="right-box">Right1</div>
          <div className="right-box">Right2</div>
          <div className="right-box">Right3</div>
        </div>
      </div>
      <div className="page1">
        Page-1
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>

      <div className="page2">
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

      <div className="page1">
        <div className="page3-head">Page-2</div>
        <div className="page3">
          <div className="product">
            <div className="item">This is box</div>
            <div className="name">Item name</div>
          </div>
          <div className="product">
            <div className="item">This is box</div>
            <div className="name">Item name</div>
          </div>
          <div className="product">
            <div className="item">This is box</div>
            <div className="name">Item name</div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="page3">
          <div className="product">
            <div className="item">This is box</div>
            <div className="name">Item name</div>
          </div>
          <div className="product">
            <div className="item">This is box</div>
            <div className="name">Item name</div>
          </div>
          <div className="product">
            <div className="item">This is box</div>
            <div className="name">Item name</div>
          </div>
        </div>
      </div>

      <div className="page4">
        <div className="left">
          <div className="left-content">
            <div className="left-head"> Heading</div>
            <div className="lines">line1</div>
            <div className="lines">line2</div>
            <div className="lines">line3</div>
          </div>

          <div className="left-image">
            <div className="image-box">
              <div className="image">Image</div>
              <div className="lines">Line1</div>
              <div className="lines">Line2</div>
            </div>

            <div className="image-box">
              <div className="image">Image</div>
              <div className="lines">Line1</div>
              <div className="lines">Line2</div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="right-image">Image</div>
          <div className="lines">Line1</div>
          <div className="lines">Line2</div>
        </div>
        <br />
        <br />
      </div>

      <div className="page3">
        <div className="product">
          <div className="item">This is box</div>
          <div className="name">Item name</div>
        </div>

        <div className="product">
          <div className="item">This is box</div>
          <div className="name">Item name</div>
        </div>

        <div className="product">
          <div className="item">This is box</div>
          <div className="name">Item name</div>
        </div>

        <div className="product">
          <div className="item">This is box</div>
          <div className="name">Item name</div>
        </div>
      </div>

      <div className="bottom">
        <br />
        <br />
        <div className="page4-box">
          <div className="bottom-image">image</div>
          <div className="bottom-content">
            <div className="left-head">heading</div>
            <div className="lines">line1</div>
            <div className="lines">line2</div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>

      <div className="footer">Footer</div>
    </>
  );
}

export default Template4;
