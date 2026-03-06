import React from "react";

function PlanPurchase() {

  return (

    <div style={{ padding: "40px" }}>

      <h2>Seller Plans</h2>

      <div style={{ marginTop: "30px", border: "1px solid #ccc", padding: "20px", width: "300px" }}>

        <h3>Basic Plan</h3>
        <p>List up to 5 properties</p>
        <p>Price: ₹999</p>

        <button>Buy Plan</button>

      </div>

      <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "20px", width: "300px" }}>

        <h3>Premium Plan</h3>
        <p>Unlimited properties</p>
        <p>Price: ₹2999</p>

        <button>Buy Plan</button>

      </div>

    </div>

  );

}

export default PlanPurchase;