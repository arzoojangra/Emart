import React from "react";
import "./Stylesheet/Login.css";
import { Link } from "react-router-dom";

function Login(props) {
  return (
    <div className="login-page">
      <div className="login-image">
        <img src="https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37336.jpg?size=338&ext=jpg" />
      </div>

      <div className="login-details">
        <form className="login-form">
          <h2>Login your account</h2>
          <label className="login-label">Username</label>
          <input className="login-input" type="text" />
          <br />
          <br />
          <label className="login-label">Password</label>
          <input className="login-input" type="password" />

          <center>
            <button className="login-btn" type="submit">
              <Link to="/">Login</Link>
            </button>
          </center>
        </form>
      </div>
    </div>
  );
}

export default Login;
