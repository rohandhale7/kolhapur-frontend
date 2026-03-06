import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";

export default function RevenueAnalytics() {
  return (
    <div style={styles.layout}>

      <AdminSidebar />

      <div style={styles.main}>

        <AdminHeader />

        <div style={styles.content}>
          <h1 style={styles.title}>Revenue Analytics</h1>

          <div style={styles.grid}>

            <div style={styles.card}>
              <h3>Total Revenue</h3>
              <p>₹0</p>
            </div>

            <div style={styles.card}>
              <h3>Plan Purchases</h3>
              <p>0</p>
            </div>

            <div style={styles.card}>
              <h3>This Month Revenue</h3>
              <p>₹0</p>
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