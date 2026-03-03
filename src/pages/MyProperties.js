import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

function MyProperties() {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMyProperties();
  }, []);

  const fetchMyProperties = async () => {
    try {
      const response = await axios.get("/api/properties/my-properties");
      setProperties(response.data);
    } catch (error) {
      console.log("Error fetching my properties", error);
    }
  };

  const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this property?"
  );

  if (!confirmDelete) return;

  try {
    await axios.delete(`/api/properties/${id}`);
    setProperties(properties.filter((property) => property._id !== id));

    alert("Property deleted successfully.");

  } catch (error) {
    console.log("Error deleting property", error);
    alert("Something went wrong while deleting.");
  }
};

  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh", padding: "40px" }}>
      <h2 style={{ marginBottom: "20px" }}>My Properties</h2>

      {properties.length === 0 && (
        <p>You have not posted any properties yet.</p>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "20px",
        }}
      >
        {properties.map((property) => (
          <div
            key={property._id}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
            }}
          >
            {/* IMAGE */}
            {property.image && (
              <img
                src={property.image}
                alt={property.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "10px",
                }}
              />
            )}

            <h3 style={{ marginBottom: "5px" }}>{property.title}</h3>

            <p><strong>₹{property.price}</strong></p>

            <p style={{ color: "#666" }}>{property.location}</p>

            <p style={{ fontSize: "14px", color: "#888" }}>
              {property.type} • {property.postedByType}
            </p>

            <p style={{ marginTop: "10px" }}>
              {property.description}
            </p>

            <p style={{ fontSize: "14px", marginTop: "5px" }}>
              📞 {property.contactNumber}
            </p>

            <div style={{ marginTop: "15px" }}>
              <button
                onClick={() => navigate(`/property/${property._id}`)}
                style={{
                  marginRight: "10px",
                  padding: "6px 12px",
                  cursor: "pointer",
                }}
              >
                View
              </button>

              <button
                onClick={() => navigate(`/edit/${property._id}`)}
                style={{
                  marginRight: "10px",
                  padding: "6px 12px",
                  cursor: "pointer",
                }}
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(property._id)}
                style={{
                  padding: "6px 12px",
                  backgroundColor: "#d9534f",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProperties;