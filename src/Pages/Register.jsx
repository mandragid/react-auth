import { useState } from "react";
import "./Register.css";
import axios from "axios";
import API from "../const/endpoint";

const Register = () => {
  const [emailInput, setEmailinput] = useState("");
  const [passwordInput, setPasswordinput] = useState("");

  const handleEmail = (e) => {
    setEmailinput(e.target.value);
    console.log(emailInput);
  };

  const handlePassword = (e) => {
    setPasswordinput(e.target.value);
    console.log(passwordInput);
  };

  const handleRegister = () => {
    const payload = {
      email: emailInput,
      password: passwordInput,
      role: "Admin",
    };
    axios
      .post(API.REGISTER, payload)
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
          <h1>Register Admin</h1>
          <input onChange={handleEmail} placeholder="Email"></input> <br />
          <input onChange={handlePassword} placeholder="Password"></input>{" "}
          <br />
          <button onClick={handleRegister}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
