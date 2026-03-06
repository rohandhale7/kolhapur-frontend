import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function PropertyDetails() {

  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    fetchProperty();
  }, []);

  const fetchProperty = async () => {

    try {

      const res = await API.get(`/properties/${id}`);

      setProperty(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  if (!property) return <p>Loading...</p>;

  return (

    <div style={{ padding: "40px" }}>

      <h2>{property.title}</h2>

      {property.images && property.images.length > 0 && (

        <img
          src={`http://localhost:5000${property.images[0]}`}
          alt=""
          width="400"
        />

      )}

      <p>City: {property.city}</p>

      <p>Type: {property.propertyType}</p>

      <p>Listing: {property.listingType}</p>

      <p>Price: ₹{property.price}</p>

      <p>{property.description}</p>

      {!showContact && (

        <button
          style={{ marginTop: "20px" }}
          onClick={() => setShowContact(true)}
        >
          View Contact Details
        </button>

      )}

      {showContact && (

        <div style={{ marginTop: "20px" }}>

          <p>Seller Name: {property.owner}</p>

        </div>

      )}

    </div>

  );

}

export default PropertyDetails;