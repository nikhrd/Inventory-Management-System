// DashboardLayout.js
import React, { useState } from "react";
import "./Dashboard.css";
import {
  FaChartBar,
  FaClipboardList,
  FaFileAlt,
  FaShoppingCart,
  FaPlug,
  FaDatabase,
  FaPhone,
  FaUsers,
} from "react-icons/fa";

import DashboardHome from "./DashboardHome";
import Inventory from "./Inventory";
import DailyInventory from "./DailyInventory";
import Reports from "./Reports";
import Logs from "./Logs";
import PurchaseOrders from "./PurchaseOrders";
import POSIntegration from "./POSIntegration";
import Backup from "./Backup";
import UserManagement from "./UserManagement";

const DashboardLayout = ({ role, onLogout }) => {
  const [activePage, setActivePage] = useState("dashboard");

  const renderContent = () => {
    switch (activePage) {
      case "inventory":
        return <Inventory />;
      case "dailyInventory":
        return <DailyInventory />;
        case "reports" :
          return <Reports/>;
          case "logs" :
            return <Logs/>;
            case "purchaseorders" :
              return <PurchaseOrders/>;
              case "posintegration" :
                return <POSIntegration/>;
                case "backup" :
                return <Backup/>;
                 case "usermanagement" :
                return <UserManagement/>;

      default:
        return <DashboardHome role={role} />;
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">Inventory Pro</h2>
        <ul>
          <li
            className={activePage === "dashboard" ? "active" : ""}
            onClick={() => setActivePage("dashboard")}
          >
            <FaChartBar /> Dashboard
          </li>
          <li
            className={activePage === "inventory" ? "active" : ""}
            onClick={() => setActivePage("inventory")}
          >
            <FaClipboardList /> Inventory
          </li>
          <li
            className={activePage === "dailyInventory" ? "active" : ""}
            onClick={() => setActivePage("dailyInventory")}
          >
            <FaFileAlt /> Daily Inventory
          </li>
          <li
            className={activePage === "reports" ? "active" : ""}
            onClick={() => setActivePage("reports")}
          >
             <FaFileAlt /> Reports
          </li>
           <li
            className={activePage === "logs" ? "active" : ""}
            onClick={() => setActivePage("logs")}
          >
             <FaFileAlt /> Logs
          </li>
         <li
            className={activePage === "purchaseorders" ? "active" : ""}
            onClick={() => setActivePage("purchaseorders")}
          >
              <FaShoppingCart /> Purchase Orders
            
          </li>
          <li
            className={activePage === "posintegration" ? "active" : ""}
            onClick={() => setActivePage("posintegration")}
          >
              <FaPlug /> POS Integration
            
          </li>
          <li
            className={activePage === "backup" ? "active" : ""}
            onClick={() => setActivePage("backup")}
          >
             <FaDatabase /> Backup & Restore
            
          </li>
          <li><FaPhone /> Phone Connectivity</li>
          <li
            className={activePage === "usermanagement" ? "active" : ""}
            onClick={() => setActivePage("usermanagement")}
          >
             <FaUsers /> User Management
          </li>
        </ul>
        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="main-content">{renderContent()}</main>
    </div>
  );
};

export default DashboardLayout;



