import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  useEffect(() => {
    const checkLogin = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", checkLogin);
    window.addEventListener("focus", checkLogin);

    return () => {
      window.removeEventListener("storage", checkLogin);
      window.removeEventListener("focus", checkLogin);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <h2 style={styles.logo}>Kolhapur Property Direct</h2>

        <div style={styles.links}>
          <Link style={styles.link} to="/">Home</Link>

          {!isLoggedIn && (
            <Link style={styles.link} to="/login">Login</Link>
          )}

          {isLoggedIn && (
            <>
              <Link style={styles.link} to="/post-property">
                Post Property
              </Link>

              <Link style={styles.link} to="/my-properties">
                My Properties
              </Link>

              <button style={styles.logoutButton} onClick={handleLogout}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: "#111",
    color: "white",
    padding: "15px 0",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    margin: 0,
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontWeight: "500",
  },
  logoutButton: {
    padding: "6px 12px",
    backgroundColor: "#d9534f",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Navbar;