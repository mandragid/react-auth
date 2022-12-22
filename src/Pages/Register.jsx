import { useState } from "react";
import "./Register.css";
import axios from "axios";
import API from "../const/endpoint";
import Navigation from "../Components/Navigation";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [emailInput, setEmailinput] = useState("");
  const [passwordInput, setPasswordinput] = useState("");
  const navigate = useNavigate();
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
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div class="navigation">
      <Navigation />
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
