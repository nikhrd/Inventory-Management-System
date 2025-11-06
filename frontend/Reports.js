import React from "react";
import "./Reports.css";
import { FaChartBar, FaExclamationTriangle, FaChartLine, FaChartPie, FaDownload } from "react-icons/fa";

function Reports() {
  const reports = [
    {
      title: "Inventory Stock Report",
      date: "2024-01-15",
      desc: "Complete overview of all products and their current stock levels",
      color: "#e6f0ff",
      icon: <FaChartBar color="#0d6efd" />,
    },
    {
      title: "Low Stock Alert Report",
      date: "2024-01-15",
      desc: "Products that need immediate restocking attention",
      color: "#ffeaea",
      icon: <FaExclamationTriangle color="#dc3545" />,
    },
    {
      title: "Sales Velocity Report",
      date: "2024-01-14",
      desc: "Analysis of product movement and sales trends",
      color: "#e9f7ef",
      icon: <FaChartLine color="#28a745" />,
    },
    {
      title: "Category Analysis",
      date: "2024-01-13",
      desc: "Performance breakdown by product categories",
      color: "#f3e9ff",
      icon: <FaChartPie color="#6f42c1" />,
    },
  ];

  return (
    <div className="reports-container">
    
      <main className="reports-main">
        <div className="reports-header">
          <div>
            <h1>Reports</h1>
            <p>Generate and download inventory reports</p>
          </div>
          <button className="generate-all-btn">
            <FaDownload /> Generate All Reports
          </button>
        </div>

        <div className="reports-grid">
          {reports.map((report, index) => (
            <div className="report-card" key={index}>
              <div
                className="report-icon"
                style={{ backgroundColor: report.color }}
              >
                {report.icon}
              </div>
              <h3>{report.title}</h3>
              <p className="date">Last generated: {report.date}</p>
              <p className="desc">{report.desc}</p>
              <div className="btn-group">
                <button className="generate-btn">Generate</button>
                <button className="preview-btn">Preview</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Reports;
