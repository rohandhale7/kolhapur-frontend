import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../api/axios";

function EditProperty() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [submitting, setSubmitting] = useState(false);
  const [existingImage, setExistingImage] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    type: "flat",
    postedByType: "owner",
    contactNumber: "",
    image: null,
  });

  useEffect(() => {
  fetchProperty();
  // eslint-disable-next-line
}, []);

  const fetchProperty = async () => {
    try {
      const response = await axios.get(`/api/properties/${id}`);

      setFormData({
        title: response.data.title,
        description: response.data.description,
        price: response.data.price,
        location: response.data.location,
        type: response.data.type,
        postedByType: response.data.postedByType,
        contactNumber: response.data.contactNumber,
        image: null,
      });

      setExistingImage(response.data.image);
    } catch (error) {
      console.log("Error loading property", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (submitting) return;
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

      await axios.put(`/api/properties/${id}`, formDataObj);

      alert("Property updated successfully!");
      navigate("/my-properties");

    } catch (error) {
      console.log("Error updating property", error);
      alert("Something went wrong while updating.");
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
        <h2 style={{ marginBottom: "20px" }}>Edit Property</h2>

        <form onSubmit={handleUpdate} encType="multipart/form-data">

          {/* Current Image */}
          {existingImage && (
            <div style={{ marginBottom: "15px" }}>
              <p style={{ fontSize: "14px", marginBottom: "5px" }}>
                Current Image:
              </p>
              <img
                src={existingImage}
                alt="Current"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
          )}

          {/* Change Image */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ fontSize: "14px" }}>
              Change Image (optional):
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              style={{ marginTop: "5px" }}
            />
          </div>

          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            style={{ ...inputStyle, height: "80px" }}
          />

          <input
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="flat">Flat</option>
            <option value="house">House</option>
            <option value="plot">Plot</option>
          </select>

          <select
            name="postedByType"
            value={formData.postedByType}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="owner">Owner</option>
            <option value="broker">Broker</option>
            <option value="builder">Builder</option>
          </select>

          <input
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <button
            type="submit"
            style={buttonStyle}
            disabled={submitting}
          >
            {submitting ? "Updating..." : "Update Property"}
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

export default EditProperty;