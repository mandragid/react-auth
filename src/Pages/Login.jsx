import { useState } from "react";
import "./Register.css";
import axios from "axios";
import API from "../const/endpoint";

const Login = () => {
  const [loginEmail, setLoginemail] = useState("");
  const [loginPassword, setLoginpassword] = useState("");

  const handleLoginEmail = (e) => {
    setLoginemail(e.target.value);
    console.log(loginEmail);
  };

  const handleLoginPassword = (e) => {
    setLoginpassword(e.target.value);
    console.log(loginPassword);
  };

  const handleLogin = () => {
    const loginPayload = {
      email: loginEmail,
      password: loginPassword,
    };
    axios
      .post(API.LOGIN, loginPayload)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
  };
  return (
    <div class="navigation">
      <ul>
        <li>
          <a href="/">Home</a> <br />
          <a href="/login">Login</a> <br />
          <a href="/register">Register</a>
        </li>
      </ul>
      <div class="container">
        <div className="form-container">
          <h1>Login</h1>
          <input onChange={handleLoginEmail} placeholder="Email"></input> <br />
          <input
            onChange={handleLoginPassword}
            placeholder="Password"
          ></input>{" "}
          <br />
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
