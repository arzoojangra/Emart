//Functional component
import React, { Component, useState } from "react";
import Message from "./Message";
function Component2() {
  const [name, setName] = useState(true);
  const [color, setColor] = useState(true);
  const [password, setPassword] = useState(true);

  return (
    <div className="container">
      This is all done using functional components!
      <br />
      <br />
      Name : {name ? "Tucker" : "Todd"}
      <br />
      <br />
      <button onClick={() => setName(!name)}>Change name</button>
      <br />
      <br />
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: color ? "pink" : "blue",
        }}
      >
        This is color box
      </div>
      <br />
      <br />
      <button onClick={() => setColor(!color)}>Change color</button>
      <br />
      <br />
      Enter password:
      <input type={password ? "password" : "text"}></input>
      <br />
      <button onClick={() => setPassword(!password)}>Show password</button>
      <br />
      <br />
      Using props:
      <br />
      <Message name="Linda"></Message>
    </div>
  );
}

export default Component2;
