import React, { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

function PostProperty() {
  const navigate = useNavigate();

  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    type: "flat",
    postedByType: "owner",
    contactNumber: "",
    image: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submitting) return; // Prevent double submit
    setSubmitting(true);

    try {
      const formDataObj = new FormData();

      formDataObj.append("title", formData.title);
      formDataObj.append("description", formData.description);
      formDataObj.append("price", formData.price);
      formDataObj.append("location", formData.location);
      formDataObj.append("type", formData.type);
      formDataObj.append("postedByType", formData.postedByType);
      formDataObj.append("contactNumber", formData.contactNumber);

      if (formData.image) {
        formDataObj.append("image", formData.image);
      }

      await axios.post("/api/properties", formDataObj);

      navigate("/my-properties");

    } catch (error) {
      console.log("SUBMIT ERROR:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh", padding: "40px" }}>
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Post Property</h2>

        <form onSubmit={handleSubmit} encType="multipart/form-data">

          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            style={{ marginBottom: "15px" }}
          />

          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            required
            style={{ ...inputStyle, height: "80px" }}
          />

          <input
            name="price"
            type="number"
            placeholder="Price"
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            name="location"
            placeholder="Location"
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <select name="type" onChange={handleChange} style={inputStyle}>
            <option value="flat">Flat</option>
            <option value="house">House</option>
            <option value="plot">Plot</option>
          </select>

          <select name="postedByType" onChange={handleChange} style={inputStyle}>
            <option value="owner">Owner</option>
            <option value="broker">Broker</option>
            <option value="builder">Builder</option>
          </select>

          <input
            name="contactNumber"
            placeholder="Contact Number"
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <button
            type="submit"
            style={buttonStyle}
            disabled={submitting}
          >
            {submitting ? "Posting..." : "Submit"}
          </button>

        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#111",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

export default PostProperty;