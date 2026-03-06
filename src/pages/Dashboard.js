import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {

  return (

    <div style={{ padding: "40px" }}>

      <h2>Seller Dashboard</h2>

      <div style={{ marginTop: "30px" }}>

        <div style={{ marginBottom: "20px" }}>
          <Link to="/post-property">
            <button>Post New Property</button>
          </Link>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <Link to="/my-properties">
            <button>My Properties</button>
          </Link>
        </div>

      </div>

    </div>

  );

}

export default Dashboard;