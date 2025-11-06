import React from "react";
import "./Inventory.css";
import { FaBoxOpen } from "react-icons/fa";

function Inventory() {
  const products = [
    {
      name: "Arabica Coffee Beans",
      description: "Premium Arabica coffee beans (1kg)",
      sku: "COF001",
      category: "Coffee",
      quantity: 25,
      unit: "kg",
      costPrice: "$35.5",
      sellingPrice: "$45.99",
      supplier: "Coffee Supply Co.",
    },
    {
      name: "Espresso Machine",
      description: "Professional espresso machine",
      sku: "MCH001",
      category: "Equipment",
      quantity: 2,
      unit: "piece",
      costPrice: "$950",
      sellingPrice: "$1299.99",
      supplier: "Equipment Hub",
    },
    {
      name: "Milk (Whole)",
      description: "Fresh whole milk (1L)",
      sku: "MLK001",
      category: "Dairy",
      quantity: 150,
      unit: "L",
      costPrice: "$3.2",
      sellingPrice: "$4.99",
      supplier: "Fresh Dairy Ltd",
    },
    {
      name: "Cappuccino",
      description: "Ready-to-serve cappuccino",
      sku: "CAP001",
      category: "Beverages",
      quantity: 0,
      unit: "cup",
      costPrice: "$3.8",
      sellingPrice: "$5.99",
      supplier: "Beverage Supply",
      lowStock: true,
    },
    {
      name: "Croissant",
      description: "Fresh baked croissants",
      sku: "CRO001",
      category: "Pastries",
      quantity: 48,
      unit: "piece",
      costPrice: "$2.2",
      sellingPrice: "$3.99",
      supplier: "Bakery Delights",
    },
  ];

  return (
    <div className="inventory-container">
      <main className="inventory-main">
        <h1>Inventory Management</h1>

        <table className="inventory-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>SKU</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Unit</th>
              <th>Cost Price</th>
              <th>Selling Price</th>
              <th>Supplier</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr
                key={index}
                className={item.lowStock || item.quantity === 0 ? "low-stock" : ""}
              >
                <td>
                  <div className="product-info">
                    <FaBoxOpen className="product-icon" />
                    <div>
                      <strong>{item.name}</strong>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </td>
                <td>{item.sku}</td>
                <td>{item.category}</td>
                <td>
                  {item.quantity === 0 ? (
                    <span className="warning-text">0 ⚠️</span>
                  ) : (
                    item.quantity
                  )}
                </td>
                <td>{item.unit}</td>
                <td>{item.costPrice}</td>
                <td>{item.sellingPrice}</td>
                <td>{item.supplier}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default Inventory;
