import React, { useEffect, useState } from "react";
import API from "../services/api";

function MyProperties() {

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchMyProperties();
  }, []);

  const fetchMyProperties = async () => {

    try {

      const res = await API.get("/properties/my-properties");

      setProperties(res.data.properties || []);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div style={{ padding: "40px" }}>

      <h2>My Properties</h2>

      {properties.map((property) => (

        <div
          key={property._id}
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            marginBottom: "20px"
          }}
        >

          <h3>{property.title}</h3>

          <p>City: {property.city}</p>

          <p>Price: ₹{property.price}</p>

        </div>

      ))}

    </div>

  );

}

export default MyProperties;