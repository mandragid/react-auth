import { useState } from "react";
import "./Register.css";
import axios from "axios";
import API from "../const/endpoint";
import Navigation from "../Components/Navigation";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [emailInput, setEmailinput] = useState("");
  const [passwordInput, setPasswordinput] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();
  const handleEmail = (e) => {
    setEmailinput(e.target.value);
    console.log(emailInput);
  };

  const handlePassword = (e) => {
    setPasswordinput(e.target.value);
    console.log(passwordInput);
  };

  const handleRegister = async () => {
    if (!emailInput.length & !passwordInput.length) {
      setErrorMessage("Please input your Login Credentials first.");
    } else {
      const payload = {
        email: emailInput,
        password: passwordInput,
        role: "Admin",
      };
      try {
        const res = await axios.post(API.REGISTER, payload);
        navigate("/login");
        console.log(res.response);
      } catch (error) {
        if (
          (error.response.data.errors[0].message =
            "Validation isEmail on email failed")
        ) {
          setErrorMessage("Invalid Email");
        } else {
          setErrorMessage("password must be at least 6 characters");
        }
        console.log(error.response);
        // setErrorMessage(error.response);
      }
    }

    // const payload = {
    //   email: emailInput,
    //   password: passwordInput,
    //   role: "Admin",
    // };
    // try {
    // } catch (error) {}

    // axios
    //   .post(API.REGISTER, payload)
    //   .then((res) => {
    //     navigate("/login");
    //   })
    //   .catch((err) => console.log(err.message));
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
          {!!errorMessage && <p>{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Register;
