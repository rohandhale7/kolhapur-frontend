import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      await API.post("/auth/register", {
        name,
        email,
        password
      });

      alert("Registration successful");

      navigate("/login");

    } catch (error) {

      console.log(error.response);

      alert("Registration failed");

    }

  };

  return (

    <div style={{ padding: "40px" }}>

      <h2>Register</h2>

      <form onSubmit={handleRegister}>

        <input
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Register
        </button>

      </form>

    </div>

  );

}

export default Register;