import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  return (

    <div style={{
      padding: "15px",
      borderBottom: "1px solid #ccc",
      display: "flex",
      gap: "20px"
    }}>

      <Link to="/">Home</Link>

      <Link to="/dashboard">Dashboard</Link>

      <Link to="/post-property">Post Property</Link>

      <Link to="/my-properties">My Properties</Link>

      <Link to="/favorites">Favorites</Link>

      <Link to="/comparison">Compare</Link>

      <Link to="/saved-search">Saved Search</Link>

      <Link to="/plans">Seller Plans</Link>

      <Link to="/login">Login</Link>

      <Link to="/register">Register</Link>

    </div>

  );

}

export default Navbar;