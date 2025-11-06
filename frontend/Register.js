import React, { useState } from "react";
import "./App.css"; // reuse same styles
import { FaEnvelope, FaLock } from "react-icons/fa";

function Register({ setShowRegister }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Registration successful!");
    setShowRegister(false); // return to login page
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2 className="title">Sign Up</h2>
        <div className="input-group">
          <label>First Name</label>
          <input
            type="text"
            name="first name"
            placeholder="Enter your first name"
          //  value={formData.email}
            onChange={handleChange}
            required
          />
          </div>
          <div className="input-group">
          <label>Last Name</label>
          <input
            type="text"
            name="last name"
            placeholder="Enter your last name"
          //  value={formData.email}
            onChange={handleChange}
            required
          />
          </div>

        <div className="input-group">
          <label>
            <FaEnvelope className="icon" />
            Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>
            <FaLock className="icon" />Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Re-enter your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Select Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">-- Select --</option>
            <option value="staff">Staff</option>
            <option value="owner">Owner</option>
          </select>
        </div>

        <button type="submit" className="login-btn">
          Register
        </button>

        <p className="signup-text">
          Already have an account?{" "}
          <a href="#" onClick={() => setShowRegister(false)}>
            Login
          </a>
        </p>
      </form>
    </div>
  );
}

export default Register;
