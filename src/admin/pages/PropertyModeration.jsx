import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";

export default function PropertyModeration() {

  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    fetch("http://localhost:5000/api/properties")
      .then(res => res.json())
      .then(data => {
        setProperties(data || []);
      })
      .catch(() => setProperties([]));

  }, []);

  const viewProperty = (id) => {
    if (!id) return;
    navigate(`/property/${id}`);
  };

  return (
    <div style={styles.layout}>

      <AdminSidebar />

      <div style={styles.main}>

        <AdminHeader />

        <div style={styles.content}>

          <h1 style={styles.title}>All Properties</h1>

          <table style={styles.table}>

            <thead>
              <tr>
                <th style={styles.th}>Title</th>
                <th style={styles.th}>City</th>
                <th style={styles.th}>Price</th>
                <th style={styles.th}>Status</th>
                <th style={styles.th}>View</th>
              </tr>
            </thead>

            <tbody>

              {properties.map((property) => (
                <tr key={property._id}>
                  <td style={styles.td}>{property.title}</td>
                  <td style={styles.td}>{property.city}</td>
                  <td style={styles.td}>₹{property.price}</td>
                  <td style={styles.td}>{property.status || "active"}</td>
                  <td style={styles.td}>
                    <button
                      style={styles.button}
                      onClick={() => viewProperty(property._id)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

const styles = {

  layout: {
    display: "flex"
  },

  main: {
    marginLeft: "240px",
    width: "100%"
  },

  content: {
    padding: "40px",
    background: "#f5f5f5",
    minHeight: "100vh"
  },

  title: {
    marginBottom: "30px"
  },

  table: {
    width: "100%",
    background: "#fff",
    borderCollapse: "collapse"
  },

  th: {
    borderBottom: "1px solid #ddd",
    padding: "12px",
    textAlign: "left"
  },

  td: {
    borderBottom: "1px solid #eee",
    padding: "12px"
  },

  button: {
    padding: "8px 12px",
    background: "#000",
    color: "#fff",
    border: "none",
    cursor: "pointer"
  }

};