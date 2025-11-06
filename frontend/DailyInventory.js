import React from "react";
import "./DailyInventory.css";
import { FaBoxOpen, FaArrowUp, FaArrowDown, FaDollarSign } from "react-icons/fa";

function DailyInventory() {
  const today = "2025-10-12";

  const data = [
    {
      product: "Arabica Coffee Beans",
      sku: "COF001 - Coffee",
      opening: 25,
      stockIn: 10,
      stockOut: 8,
      waste: 1,
      closing: 26,
      cost: "$35.00",
      stockValue: "$91.00",
      turnover: "32.0%",
    },
    {
      product: "Whole Milk",
      sku: "MLK001 - Dairy",
      opening: 150,
      stockIn: 50,
      stockOut: 45,
      waste: 2,
      closing: 153,
      cost: "$90.00",
      stockValue: "$275.40",
      turnover: "30.0%",
    },
  ];

  return (
    <div className="daily-container">
      

      <main className="daily-main">
        <h1>Daily Inventory Management</h1>
        <p>Track daily stock movements and costs</p>

        {/* Summary Cards */}
        <div className="stats-container">
          <div className="stat-card green">
            <p>Total Stock In</p>
            <h2>60</h2>
            <FaArrowUp className="icon" />
          </div>
          <div className="stat-card blue">
            <p>Total Stock Out</p>
            <h2>53</h2>
            <FaArrowDown className="icon" />
          </div>
          <div className="stat-card purple">
            <p>Total Cost</p>
            <h2>$125.00</h2>
            <FaDollarSign className="icon" />
          </div>
          <div className="stat-card red">
            <p>Waste Cost</p>
            <h2>$7.10</h2>
          </div>
        </div>

        {/* Daily Inventory Table */}
        <div className="table-section">
          <h3>Daily Inventory for {today}</h3>
          <table className="daily-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Opening</th>
                <th>Stock In</th>
                <th>Stock Out</th>
                <th>Waste</th>
                <th>Closing</th>
                <th>Cost</th>
                <th>Stock Value</th>
                <th>Turnover %</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>
                    <div className="product-info">
                      <FaBoxOpen className="product-icon" />
                      <div>
                        <strong>{item.product}</strong>
                        <p>{item.sku}</p>
                      </div>
                    </div>
                  </td>
                  <td>{item.opening}</td>
                  <td className="green">{item.stockIn}</td>
                  <td className="blue">{item.stockOut}</td>
                  <td className="red">{item.waste}</td>
                  <td>{item.closing}</td>
                  <td>{item.cost}</td>
                  <td>{item.stockValue}</td>
                  <td className="turnover">{item.turnover}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default DailyInventory;
