import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";

function Home() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [filters, setFilters] = useState({
    location: "",
    type: "",
    sortBy: "",
  });

  useEffect(() => {
    fetchProperties();
  }, [page, filters]);

  const fetchProperties = async () => {
    try {
      setLoading(true);

      const query = new URLSearchParams({
        page,
        ...filters,
      }).toString();

      const response = await axios.get(`/api/properties?${query}`);

      setProperties(response.data.properties);
      setTotalPages(response.data.totalPages || 1);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching properties:", error);
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    setPage(1);
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ padding: "40px", background: "#f5f5f5", minHeight: "100vh" }}>
      <h1>Kolhapur Property Direct</h1>
      <p style={{ color: "#555" }}>
        Buy, Sell & Rent properties directly without brokers.
      </p>

      {/* FILTER SECTION */}
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        <input
          name="location"
          placeholder="Search by location"
          value={filters.location}
          onChange={handleFilterChange}
          style={inputStyle}
        />

        <select
          name="type"
          value={filters.type}
          onChange={handleFilterChange}
          style={inputStyle}
        >
          <option value="">All Types</option>
          <option value="flat">Flat</option>
          <option value="house">House</option>
          <option value="plot">Plot</option>
        </select>

        <select
          name="sortBy"
          value={filters.sortBy}
          onChange={handleFilterChange}
          style={inputStyle}
        >
          <option value="">Sort By</option>
          <option value="price_asc">Price Low to High</option>
          <option value="price_desc">Price High to Low</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

      {loading && <p style={{ marginTop: "20px" }}>Loading...</p>}

      {!loading && properties.length === 0 && (
        <p style={{ marginTop: "20px" }}>No properties found.</p>
      )}

      {!loading && properties.length > 0 && (
        <>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            {properties.map((property) => (
              <Link
                key={property._id}
                to={`/property/${property._id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  style={{
                    background: "white",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                  }}
                >
                  {/* IMAGE SUPPORTS BOTH image AND images ARRAY */}
                  {(property.image || property.images?.[0]) && (
                    <img
                      src={property.image || property.images[0]}
                      alt={property.title}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "6px",
                        marginBottom: "10px",
                      }}
                    />
                  )}

                  <h3>{property.title}</h3>
                  <p>
                    <strong>₹{property.price}</strong>
                  </p>
                  <p style={{ color: "#666" }}>{property.location}</p>
                  <p style={{ fontSize: "14px", color: "#888" }}>
                    {property.type} • {property.postedByType}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: "30px", textAlign: "center" }}>
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              style={paginationButton}
            >
              Previous
            </button>

            <span style={{ margin: "0 15px" }}>
              Page {page} of {totalPages}
            </span>

            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              style={paginationButton}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

const inputStyle = {
  padding: "8px 12px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const paginationButton = {
  padding: "8px 14px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  cursor: "pointer",
};

export default Home;