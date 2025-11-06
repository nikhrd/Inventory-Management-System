import React, { useState } from "react";
import "./POSIntegration.css";

const POSIntegration = () => {
  const [systems, setSystems] = useState([
    {
      name: "Square POS",
      status: "connected",
      sales: 245.67,
      transactions: 23,
      lastSync: "1/15/2024, 4:00:00 PM",
      apiKey: "sqQ***",
    },
    {
      name: "Toast POS",
      status: "disconnected",
      sales: 0.0,
      transactions: 0,
      lastSync: "1/14/2024, 10:15:00 PM",
      apiKey: "tst***",
    },
    {
      name: "Clover POS",
      status: "connecting",
      sales: 0.0,
      transactions: 0,
      lastSync: "Never",
      apiKey: "clv***",
    },
  ]);

  const handleConnectToggle = (index) => {
    const updated = [...systems];
    const current = updated[index];
    if (current.status === "connected") current.status = "disconnected";
    else current.status = "connected";
    setSystems(updated);
  };

  const connectedSystems = systems.filter((s) => s.status === "connected");
  const totalSales = connectedSystems.reduce((sum, s) => sum + s.sales, 0);
  const totalTransactions = connectedSystems.reduce(
    (sum, s) => sum + s.transactions,
    0
  );

  return (
    <div className="pos-container">
      <div className="pos-header">
        <div>
          <h2 className="pos-title">POS Integration</h2>
          <p className="pos-subtitle">
            Connect and manage Point of Sale systems
          </p>
        </div>
        <button className="pos-add-btn">+ Add POS System</button>
      </div>

      <div className="pos-grid">
        {systems.map((system, index) => (
          <div key={index} className={`pos-card ${system.status}`}>
            <div className="pos-card-header">
              <h3>{system.name}</h3>
              <span className={`pos-status ${system.status}`}>
                {system.status === "connected" && "🟢 connected"}
                {system.status === "disconnected" && "🔴 disconnected"}
                {system.status === "connecting" && "🟡 connecting"}
              </span>
            </div>
            <p className="pos-subtext">{system.name}</p>

            <div className="pos-details">
              <p>
                <strong>Sales Today</strong>{" "}
                <span>${system.sales.toFixed(2)}</span>
              </p>
              <p>
                <strong>Transactions</strong> <span>{system.transactions}</span>
              </p>
              <p>
                <strong>Last Sync</strong> <span>{system.lastSync}</span>
              </p>
              <p>
                <strong>API Key</strong> <span>{system.apiKey}</span>
              </p>
            </div>

            <div className="pos-actions">
              <button
                className={`pos-btn ${
                  system.status === "connected"
                    ? "disconnect"
                    : system.status === "disconnected"
                    ? "connect"
                    : "disabled"
                }`}
                onClick={() =>
                  system.status !== "connecting" && handleConnectToggle(index)
                }
              >
                {system.status === "connected"
                  ? "Disconnect"
                  : system.status === "disconnected"
                  ? "Connect"
                  : "Connect"}
              </button>
              <button className="pos-settings">
                <i className="fa fa-cog"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="pos-summary">
        <h3>Sync Status</h3>
        <div className="summary-stats">
          <div>
            <p className="summary-label">Connected Systems</p>
            <p className="summary-value">{connectedSystems.length}</p>
          </div>
          <div>
            <p className="summary-label">Total Sales Today</p>
            <p className="summary-value blue">${totalSales.toFixed(2)}</p>
          </div>
          <div>
            <p className="summary-label">Total Transactions</p>
            <p className="summary-value purple">{totalTransactions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default POSIntegration;

