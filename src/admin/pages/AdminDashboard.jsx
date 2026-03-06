import { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";

export default function AdminDashboard() {

  const [stats, setStats] = useState({
    users: 0,
    properties: 0,
    review: 0
  });

  useEffect(() => {

    async function loadStats() {

      try {

        const usersRes = await fetch("http://localhost:5000/api/auth/users");
        const users = await usersRes.json();

        const propertiesRes = await fetch("http://localhost:5000/api/properties");
        const properties = await propertiesRes.json();

        const reviewCount = properties.filter(
          p => p.reviewRequired === true
        ).length;

        setStats({
          users: users.length,
          properties: properties.length,
          review: reviewCount
        });

      } catch (error) {

        console.log(error);

      }

    }

    loadStats();

  }, []);

  return (
    <div style={styles.layout}>

      <AdminSidebar />

      <div style={styles.main}>

        <AdminHeader />

        <div style={styles.content}>

          <h1 style={styles.title}>Admin Dashboard</h1>

          <div style={styles.grid}>

            <div style={styles.card}>
              <h3>Total Users</h3>
              <p>{stats.users}</p>
            </div>

            <div style={styles.card}>
              <h3>Total Properties</h3>
              <p>{stats.properties}</p>
            </div>

            <div style={styles.card}>
              <h3>Properties For Review</h3>
              <p>{stats.review}</p>
            </div>

          </div>

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

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px"
  },

  card: {
    background: "#fff",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.08)"
  }

};