import { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";

export default function UserManagement() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/api/auth/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(() => setUsers([]));

  }, []);

  return (
    <div style={styles.layout}>

      <AdminSidebar />

      <div style={styles.main}>

        <AdminHeader />

        <div style={styles.content}>
          <h1 style={styles.title}>User Management</h1>

          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Role</th>
              </tr>
            </thead>

            <tbody>

              {users.map((user, index) => (
                <tr key={index}>
                  <td style={styles.td}>{user.name}</td>
                  <td style={styles.td}>{user.email}</td>
                  <td style={styles.td}>{user.role || "User"}</td>
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
  }

};