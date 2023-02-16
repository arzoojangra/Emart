import React, { Component, useState } from "react";

function Form2() {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: [event.target.value] });
    const obj = formData;
    console.log(obj);
  };

  const handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
  };

  return (
    <div className="container">
      23 January 2023
      <br />
      <b>Form 2</b>
      <br />
      <br />
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="form">
          <label>First Name</label>
          <input type="text" onChange={(event) => handleChange(event)} />

          <label>Last Name</label>
          <input type="text" onChange={(event) => handleChange(event)} />

          <label>Age</label>
          <input type="number" onChange={(event) => handleChange(event)} />

          <label>Gender</label>
          <select name="gender" onChange={(event) => handleChange(event)}>
            <option>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <label>E-mail</label>
          <input type="email" onChange={(event) => handleSubmit(event)} />

          <label>Address</label>
          <input type="text" onChange={(event) => handleSubmit(event)} />

          <label>PIN Code</label>
          <input type="text" onChange={(event) => handleSubmit(event)} />
          <br />
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form2;
