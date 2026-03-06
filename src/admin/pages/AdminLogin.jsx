import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@admin.com" && password === "admin123") {
      localStorage.setItem("adminToken", "admin_logged_in");
      navigate("/admin/dashboard");
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        <h2 style={styles.title}>Admin Login</h2>

        <form onSubmit={handleLogin} style={styles.form}>

          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />

          <input
            type="password"
            placeholder="Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />

          <button type="submit" style={styles.button}>
            Login
          </button>

        </form>

      </div>
    </div>
  );
}

const styles = {

  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f5f5"
  },

  card: {
    width: "360px",
    padding: "40px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  },

  title: {
    marginBottom: "20px",
    textAlign: "center"
  },

  form: {
    display: "flex",
    flexDirection: "column"
  },

  input: {
    padding: "12px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "6px"
  },

  button: {
    padding: "12px",
    background: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }

};