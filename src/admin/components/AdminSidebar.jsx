import { Link, useLocation } from "react-router-dom";

export default function AdminSidebar() {

  const location = useLocation();

  const active = (path) =>
    location.pathname === path ? styles.active : styles.link;

  return (
    <div style={styles.sidebar}>

      <div style={styles.logo}>
        Admin Panel
      </div>

      <nav style={styles.nav}>

        <Link to="/admin/dashboard" style={active("/admin/dashboard")}>
          Dashboard
        </Link>

        <Link to="/admin/properties" style={active("/admin/properties")}>
          Property Moderation
        </Link>

        <Link to="/admin/users" style={active("/admin/users")}>
          User Management
        </Link>

        <Link to="/admin/revenue" style={active("/admin/revenue")}>
          Revenue Analytics
        </Link>

        <Link to="/admin/settings" style={active("/admin/settings")}>
          Platform Settings
        </Link>

      </nav>

    </div>
  );
}

const styles = {

  sidebar: {
    width: "240px",
    height: "100vh",
    background: "#111",
    color: "#fff",
    padding: "25px",
    position: "fixed",
    left: 0,
    top: 0
  },

  logo: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "40px"
  },

  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "18px"
  },

  link: {
    color: "#aaa",
    textDecoration: "none",
    fontSize: "15px"
  },

  active: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "600"
  }

};