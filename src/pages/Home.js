import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

function Home() {

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {

    try {

      const res = await API.get("/properties");

      setProperties(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div style={{ padding: "40px" }}>

      <h1>Kolhapur Property Direct</h1>

      <div style={{
        marginTop: "40px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px,1fr))",
        gap: "25px"
      }}>

        {properties.map((property) => (

          <div
            key={property._id}
            style={{
              border: "1px solid #e5e5e5",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
              background: "#fff"
            }}
          >

            {property.images && property.images.length > 0 && (

              <img
                src={`http://localhost:5000${property.images[0]}`}
                alt=""
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover"
                }}
              />

            )}

            <div style={{ padding: "15px" }}>

              <h3 style={{ marginBottom: "5px" }}>
                {property.title}
              </h3>

              <p style={{ color: "#777", marginBottom: "8px" }}>
                {property.city}
              </p>

              <p style={{
                fontWeight: "bold",
                fontSize: "18px",
                marginBottom: "10px"
              }}>
                ₹{property.price}
              </p>

              <Link to={`/property/${property._id}`}>

                <button style={{
                  padding: "8px 15px",
                  border: "none",
                  background: "#2c7be5",
                  color: "#fff",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}>
                  View Details
                </button>

              </Link>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Home;