import React, { useState } from "react";
import "./App.css";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Register from "./Register";
import DashboardLayout from "./DashboardLayout";

function App() {
  const [role, setRole] = useState("");
  const [showRegister, setShowRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!role) {
      alert("Please select a role!");
      return;
    }
    setIsLoggedIn(true);
  };

  const handleGoogleLogin = () => {
    alert("Google Login Successful (demo)");
    setIsLoggedIn(true);
  };

  // ✅ Add this missing function
  const handleLogout = () => {
    setIsLoggedIn(false);
    setRole("");
  };

  // ✅ After login, directly go to Dashboard
  if (isLoggedIn) {
    return <DashboardLayout role={role} onLogout={handleLogout} />;
  }

  return (
    <div className="login-container">
      {!showRegister ? (
        <form className="login-box" onSubmit={handleLogin}>
          <h2 className="title">LogIn</h2>

          <div className="input-group">
            <label>
              <FaEnvelope className="icon" /> Email
            </label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="input-group">
            <label>
              <FaLock className="icon" /> Password
            </label>
            <input type="password" placeholder="Enter your password" required />
          </div>

          <div className="input-group">
            <label>Select Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="">-- Select --</option>
              <option value="staff">Staff</option>
              <option value="owner">Owner</option>
            </select>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          <a href="#" className="forgot-password">
            Forgot Password?
          </a>

          <p className="signup-text">
            Don’t have an account?{" "}
            <a href="#" onClick={() => setShowRegister(true)}>
              Sign up
            </a>
          </p>

          <p className="social-text">or</p>
          <div className="google-login" onClick={handleGoogleLogin}>
            <FcGoogle className="google-icon" />
            <span>Login with Google</span>
          </div>
        </form>
      ) : (
        <Register setShowRegister={setShowRegister} />
      )}
    </div>
  );
}

export default App;

