import { useNavigate } from "react-router-dom";

export default function AdminHeader() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div style={styles.header}>

      <div style={styles.title}>
        Kolhapur Property Admin
      </div>

      <button style={styles.button} onClick={logout}>
        Logout
      </button>

    </div>
  );
}

const styles = {

  header: {
    height: "60px",
    background: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 30px",
    borderBottom: "1px solid #eee"
  },

  title: {
    fontSize: "18px",
    fontWeight: "600"
  },

  button: {
    padding: "8px 14px",
    background: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }

};