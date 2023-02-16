import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Stylesheet/Register.css";

function Register(props) {
  const [regData, setRegData] = useState({});

  const handleChange = (event) => {
    setRegData({ ...regData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    console.log(regData);
    event.preventDefault();
  };

  return (
    <div className="reg-background">
      <div className="reg-main">
        <form className="reg-form" onSubmit={(event) => handleSubmit(event)}>
          <div className="reg-heading">User Registration</div>
          <hr />
          <hr />
          <label>Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={(event) => handleChange(event)}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={(event) => handleChange(event)}
          />
          <br />
          <br />
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="+91"
            onChange={(event) => handleChange(event)}
          />
          <br />
          <br />
          <label>Gender</label>
          <br />
          <br />

          <div className="gender">
            <>
              <input
                className="reg-radio"
                type="radio"
                id="male"
                name="gender"
                onChange={(event) => handleChange(event)}
              />

              <label className="radio" htmlFor="male">
                Male
              </label>
            </>

            <>
              <input
                className="reg-radio"
                type="radio"
                id="female"
                name="gender"
                onChange={(event) => handleChange(event)}
              />

              <label className="radio" htmlFor="female">
                Female
              </label>
            </>

            <>
              <input
                className="reg-radio"
                type="radio"
                id="other"
                name="gender"
                onChange={(event) => handleChange(event)}
              />

              <label className="radio" htmlFor="other">
                Other
              </label>
            </>
          </div>

          <br />
          <br />

          <hr />
          <hr />

          <label>Email</label>
          <input
            className="email"
            type="email"
            name="email"
            placeholder="example@example.com"
            onChange={(event) => handleChange(event)}
          />
          <br />
          <br />
          <label>Address</label>
          <input
            className="address"
            type="text"
            name="address"
            placeholder="Street address"
            onChange={(event) => handleChange(event)}
          />
          <br />
          <br />
          <input
            className="address2"
            type="text"
            name="address2"
            placeholder="Street address line 2"
            onChange={(event) => handleChange(event)}
          />
          <br />
          <br />
          <input
            className="city"
            type="text"
            name="city"
            placeholder="City"
            onChange={(event) => handleChange(event)}
          />
          <input
            type="text"
            name="state"
            placeholder="State/Province"
            onChange={(event) => handleChange(event)}
          />
          <br />
          <br />
          <input
            className="city"
            type="text"
            name="pinCode"
            placeholder="Pin Code"
            onChange={(event) => handleChange(event)}
          />
          <br />
          <br />
          <hr />
          <hr />

          <label>Username </label>
          <input
            type="text"
            name="username"
            onChange={(event) => handleChange(event)}
          />
          <br />
          <br />

          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={(event) => handleChange(event)}
          />

          <center>
            <button className="reg-button" type="submit">
              <Link to="/login">Submit</Link>
            </button>

            <button className="reg-button" type="reset">
              Reset
            </button>
          </center>
        </form>
      </div>
    </div>
  );
}

export default Register;
