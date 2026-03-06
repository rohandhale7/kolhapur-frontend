import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";

export default function PlatformSettings() {
  return (
    <div style={styles.layout}>

      <AdminSidebar />

      <div style={styles.main}>

        <AdminHeader />

        <div style={styles.content}>
          <h1 style={styles.title}>Platform Settings</h1>

          <div style={styles.card}>

            <div style={styles.field}>
              <label>Platform Name</label>
              <input style={styles.input} placeholder="Enter platform name" />
            </div>

            <div style={styles.field}>
              <label>Support Email</label>
              <input style={styles.input} placeholder="Enter support email" />
            </div>

            <div style={styles.field}>
              <label>Contact Number</label>
              <input style={styles.input} placeholder="Enter contact number" />
            </div>

            <button style={styles.button}>
              Save Settings
            </button>

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

  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    width: "400px",
    boxShadow: "0 0 10px rgba(0,0,0,0.08)"
  },

  field: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px"
  },

  input: {
    padding: "10px",
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