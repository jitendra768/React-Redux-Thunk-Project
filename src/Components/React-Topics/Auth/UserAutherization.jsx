/* eslint-disable react/prop-types */
// 2. Authorization
// Authorization is the process of determining what a user is allowed to do.
// It ensures that an authenticated user has the necessary permissions to access specific resources or perform certain actions.

import { useState } from "react";

const Dashboard = ({ isAuthenticated, userRole }) => {
  if (!isAuthenticated) {
    return (
      <div className="p-4 text-red-500 font-bold">
        Please login to access the dashboard.
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      {userRole === "admin" ? (
        <div className="space-x-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Delete User
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Edit Settings
          </button>
        </div>
      ) : (
        <div className="text-green-600 font-semibold">
          Welcome, regular user!
        </div>
      )}
    </div>
  );
};

const UserAutherization = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState("user"); // Default role is 'user'
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (userName, password) => {
    // Simulate authentication and role assignment
    if (userName === "admin" && password === "password") {
      setIsAuthenticated(true);
      setUserRole("admin");
    } else if (userName === "user" && password === "1234") {
      setIsAuthenticated(true);
      setUserRole("user");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {!isAuthenticated ? (
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => handleLogin(userName, password)}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </div>
      ) : (
        <Dashboard isAuthenticated={isAuthenticated} userRole={userRole} />
      )}
    </div>
  );
};

export default UserAutherization;
