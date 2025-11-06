import React from "react";
import "./UserManagement.css";
import { FaEdit, FaTrash, FaUser } from "react-icons/fa";

function UserManagement() {
  const users = [
    {
      name: "Admin User",
      email: "admin@test.com",
      role: "Admin",
      status: "Active",
      lastLogin: "1/15/2024",
      created: "1/1/2024",
    },
    {
      name: "Manager Smith",
      email: "manager@test.com",
      role: "Manager",
      status: "Active",
      lastLogin: "1/15/2024",
      created: "1/5/2024",
    },
    {
      name: "Staff Johnson",
      email: "staff@test.com",
      role: "Staff",
      status: "Active",
      lastLogin: "1/14/2024",
      created: "1/10/2024",
    },
    {
      name: "John Doe",
      email: "john.doe@gmail.com",
      role: "Staff",
      status: "Inactive",
      lastLogin: "1/12/2024",
      created: "1/12/2024",
    },
  ];

  return (
    <div className="user-management-container">
      <div className="user-management-header">
        <div>
          <h2>User Management</h2>
          <p>Manage users and their permissions</p>
        </div>
        <button className="add-user-btn">+ Add User</button>
      </div>

      <table className="user-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Role</th>
            <th>Status</th>
            <th>Last Login</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="user-info">
                <div className="user-avatar">
                  <FaUser />
                </div>
                <div>
                  <div className="user-name">{user.name}</div>
                  <div className="user-email">{user.email}</div>
                </div>
              </td>

              <td>
                <span
                  className={`role-badge ${
                    user.role === "Admin"
                      ? "admin"
                      : user.role === "Manager"
                      ? "manager"
                      : "staff"
                  }`}
                >
                  {user.role}
                </span>
              </td>

              <td>
                <span
                  className={`status-badge ${
                    user.status === "Active" ? "active" : "inactive"
                  }`}
                >
                  {user.status}
                </span>
              </td>

              <td>{user.lastLogin}</td>
              <td>{user.created}</td>

              <td className="action-icons">
                <FaEdit className="edit-icon" />
                <FaTrash className="delete-icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;