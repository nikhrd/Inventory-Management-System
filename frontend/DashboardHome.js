// DashboardHome.js
import React from "react";

const DashboardHome = ({ role }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome back, {role === "owner" ? "Owner" : "Staff"}! Here's your inventory overview.</p>

      <div className="summary-cards">
        <div className="card">
          <h3>Total Products</h3>
          <p className="value">10</p>
        </div>
        <div className="card green">
          <h3>Inventory Value</h3>
          <p className="value">$2845.67</p>
        </div>
        <div className="card red">
          <h3>Low Stock Items</h3>
          <p className="value">3</p>
        </div>
        <div className="card purple">
          <h3>Sales Today</h3>
          <p className="value">$324.50</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
