// Authentication
// Authentication is the process of verifying who a user is.
// It ensures that the user is who they claim to be.
// This is typically done using credentials like usernames, passwords, or third-party services (e.g., Google, Facebook).

import { useState } from "react";

const UserLogin = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    if (userName === "admin" && password === "password") {
      setIsAuthenticated(true);
      alert("Login successful!");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {!isAuthenticated ? (
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Login
          </h2>
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Welcome, {userName}!
          </h2>
          <p className="text-gray-600">You have successfully logged in.</p>
        </div>
      )}
    </div>
  );
};

export default UserLogin;
