import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";

function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
  fetchProperty();
  // eslint-disable-next-line
}, []);

  const fetchProperty = async () => {
    try {
      const response = await axios.get(`/api/properties/${id}`);
      setProperty(response.data);
    } catch (error) {
      console.log("Error fetching property", error);
    }
  };

  if (!property) {
    return <div style={{ padding: "40px" }}>Loading...</div>;
  }

  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh", padding: "40px" }}>
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "30px",
        }}
      >
        {/* LEFT SIDE */}
        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
          }}
        >
          {/* PROPERTY IMAGE */}
          {property.image && (
            <img
              src={property.image}
              alt="property"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "20px",
              }}
            />
          )}

          <h2>{property.title}</h2>
          <p style={{ fontSize: "22px", fontWeight: "bold" }}>
            ₹{property.price}
          </p>

          <hr style={{ margin: "20px 0" }} />

          <p><strong>Location:</strong> {property.location}</p>
          <p><strong>Type:</strong> {property.type}</p>
          <p><strong>Posted By:</strong> {property.postedByType}</p>

          <hr style={{ margin: "20px 0" }} />

          <h4>Description</h4>
          <p style={{ lineHeight: "1.6", color: "#555" }}>
            {property.description}
          </p>
        </div>

        {/* RIGHT SIDE CONTACT BOX */}
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "10px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
            height: "fit-content",
          }}
        >
          <h3>Contact Seller</h3>
          <p style={{ marginTop: "10px" }}>
            <strong>Phone:</strong>
          </p>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {property.contactNumber}
          </p>

          <button
            style={{
              width: "100%",
              marginTop: "15px",
              padding: "10px",
              backgroundColor: "#111",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Call Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;