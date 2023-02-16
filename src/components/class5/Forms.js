import React, { Component, useState } from "react";

function Forms() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [pinCode, setPinCode] = useState("");

  const handleSubmit = (event) => {
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(address);
    console.log(pinCode);

    event.preventDefault();

    setFirstName("");
    setLastName("");
    setAge("");
    setAddress("");
    setEmail("");
    setPinCode("");
  };

  return (
    <div className="container">
      23 January 2023
      <br />
      <b>Form 1</b>
      <br />
      <br />
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="form">
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />

          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />

          <label>Age</label>
          <input
            type="number"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />

          <label>E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />

          <label>PIN Code</label>
          <input
            type="text"
            value={pinCode}
            onChange={(event) => setPinCode(event.target.value)}
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Forms;
