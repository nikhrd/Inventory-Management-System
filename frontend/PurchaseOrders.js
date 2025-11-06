import React, { useState } from "react";
import "./PurchaseOrders.css";

const PurchaseOrders = () => {
  const [orders] = useState([
    {
      id: "PO-2024-001",
      supplier: "Tech Supplies Inc.",
      email: "orders@techsupplies.com",
      expectedDelivery: "1/25/2024",
      totalAmount: "$15,499.40",
      items: [
        { name: "Laptop Pro 15”", qty: 10, price: 1299.99, total: 12999.9 },
        { name: "Wireless Mouse", qty: 50, price: 29.99, total: 1499.5 },
      ],
      notes: "Urgent restock order",
      status: "Pending",
    },
    {
      id: "PO-2024-002",
      supplier: "Accessories Plus",
      email: "sales@accessoriesplus.com",
      expectedDelivery: "1/30/2024",
      totalAmount: "$3,099.80",
      items: [
        { name: "USB-C Charger", qty: 100, price: 30.99, total: 3099 },
      ],
      notes: "Routine monthly order",
      status: "Approved",
    },
  ]);

  return (
    <div className="po-container">
      <div className="po-header">
        <div>
          <h2 className="po-title">Purchase Orders</h2>
          <p className="po-subtitle">
            Manage supplier orders and deliveries
          </p>
        </div>
        <button className="po-new-btn">+ New Purchase Order</button>
      </div>

      {orders.map((order) => (
        <div key={order.id} className="po-card">
          <div className="po-card-header">
            <div>
              <h3 className="po-id">{order.id}</h3>
              <p className="po-supplier">{order.supplier}</p>
            </div>
            <div className="po-status-section">
              <span
                className={`po-status ${
                  order.status.toLowerCase() === "pending"
                    ? "pending"
                    : "approved"
                }`}
              >
                {order.status.toUpperCase()}
              </span>
              <div className="po-actions">
                <i className="fa fa-edit edit-icon"></i>
                <i className="fa fa-trash delete-icon"></i>
              </div>
            </div>
          </div>

          <div className="po-details">
            <div className="po-row">
              <div>
                <strong>Supplier Email</strong>
                <p>{order.email}</p>
              </div>
              <div>
                <strong>Expected Delivery</strong>
                <p>{order.expectedDelivery}</p>
              </div>
              <div>
                <strong>Total Amount</strong>
                <p className="po-total">{order.totalAmount}</p>
              </div>
            </div>

            <div className="po-items">
              <strong>Items Ordered</strong>
              <div className="po-item-list">
                {order.items.map((item, index) => (
                  <div key={index} className="po-item">
                    {item.name} — {item.qty} × ${item.price} = ${item.total}
                  </div>
                ))}
              </div>
            </div>

            <div className="po-notes">
              <strong>Notes</strong>
              <p>{order.notes}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PurchaseOrders;
