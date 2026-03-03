import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import PostProperty from "./pages/PostProperty";
import PropertyDetails from "./pages/PropertyDetails";
import MyProperties from "./pages/MyProperties";
import EditProperty from "./pages/EditProperty";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: "calc(100vh - 70px)" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post-property" element={<PostProperty />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/my-properties" element={<MyProperties />} />
          <Route path="/edit/:id" element={<EditProperty />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;