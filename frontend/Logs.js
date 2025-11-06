import React, { useState } from "react";
import "./Logs.css";

const sampleLogs = [
  {
    id: 1,
    type: "Stock In",
    product: "Laptop Pro 15”",
    quantity: "+10",
    stockChange: "15 → 25",
    user: "Admin User",
    timestamp: "1/15/2024, 4:00:00 PM",
    notes: "New shipment received",
  },
  {
    id: 2,
    type: "Stock Out",
    product: "Wireless Mouse",
    quantity: "-5",
    stockChange: "155 → 150",
    user: "Admin User",
    timestamp: "1/15/2024, 2:45:00 PM",
    notes: "Sale to customer",
  },
  {
    id: 3,
    type: "Stock In",
    product: "Mechanical Keyboard",
    quantity: "+8",
    stockChange: "0 → 8",
    user: "Admin User",
    timestamp: "1/14/2024, 10:15:00 PM",
    notes: "Restock from supplier",
  },
];

const Logs = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredLogs = sampleLogs.filter((log) => {
    const matchesFilter =
      filter === "All" || log.type.toLowerCase().includes(filter.toLowerCase());
    const matchesSearch =
      log.product.toLowerCase().includes(search.toLowerCase()) ||
      log.notes.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="logs-container">
      <h2 className="logs-title">Transaction Logs</h2>
      <p className="logs-subtitle">
        Track all inventory movements and changes
      </p>

      <div className="logs-search-filter">
        <input
          type="text"
          placeholder="Search transactions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="logs-filters">
          {["All", "Stock In", "Stock Out", "Adjustments"].map((f) => (
            <button
              key={f}
              className={filter === f ? "active" : ""}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <table className="logs-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Stock Change</th>
            <th>User</th>
            <th>Timestamp</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {filteredLogs.map((log) => (
            <tr key={log.id}>
              <td className={`type ${log.type.replace(" ", "").toLowerCase()}`}>
                {log.type}
              </td>
              <td>{log.product}</td>
              <td>{log.quantity}</td>
              <td>{log.stockChange}</td>
              <td>{log.user}</td>
              <td>{log.timestamp}</td>
              <td>{log.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Logs;
