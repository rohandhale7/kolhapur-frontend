import React, { useState } from "react";
import API from "../services/api";

function PostProperty() {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [city, setCity] = useState("");
  const [propertyType, setPropertyType] = useState("Apartment");
  const [listingType, setListingType] = useState("Sale");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      let imageUrl = "";

      if (image) {

        const imgData = new FormData();
        imgData.append("image", image);

        const uploadRes = await API.post("/properties/upload", imgData);

        imageUrl = uploadRes.data.imageUrl;

      }

      await API.post("/properties", {

        title,
        price,
        city,
        propertyType,
        listingType,
        description,
        images: [imageUrl]

      });

      alert("Property posted successfully");

    } catch (error) {

      console.log(error);

      alert("Error posting property");

    }

  };

  return (

    <div style={{ padding: "40px" }}>

      <h2>Post Property</h2>

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <br /><br />

        <input
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />

        <br /><br />

        <input
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
        />

        <br /><br />

        <select onChange={(e) => setPropertyType(e.target.value)}>

          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
          <option value="Plot">Plot</option>

        </select>

        <br /><br />

        <select onChange={(e) => setListingType(e.target.value)}>

          <option value="Sale">Sale</option>
          <option value="Rent">Rent</option>

        </select>

        <br /><br />

        <textarea
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <br /><br />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <br /><br />

        <button type="submit">
          Submit Property
        </button>

      </form>

    </div>

  );

}

export default PostProperty;