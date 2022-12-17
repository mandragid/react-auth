import { useEffect, useState } from "react";
import "./Register.css";
import axios from "axios";
import API from "../const/endpoint";
import Navigation from "../Components/Navigation";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginEmail, setLoginemail] = useState("");
  const [loginPassword, setLoginpassword] = useState("");
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

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
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.access_token);
        navigate("/discovery");
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div class="navigation">
      <Navigation />

      {isLogin ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <div class="container">
          <div className="form-container">
            <h1>Login</h1>
            <input onChange={handleLoginEmail} placeholder="Email"></input>{" "}
            <br />
            <input
              onChange={handleLoginPassword}
              placeholder="Password"
            ></input>{" "}
            <br />
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
