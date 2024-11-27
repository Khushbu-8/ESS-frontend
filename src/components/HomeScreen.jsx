import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user role on page load
    const fetchUserRole = async () => {
      try {
        const response = await axios.get("/api/user", { withCredentials: true });
        setRole(response.data.role);
      } catch (err) {
        console.error("Failed to fetch user role:", err);
        setRole(null);
      }
    };
    fetchUserRole();
  }, []);

  const goToDashboard = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Welcome to the Home Screen</h1>
      {role === "admin" ? (
        <button onClick={goToDashboard}>Admin Dashboard</button>
      ) : (
        <p>You are logged in as a regular user.</p>
      )}
    </div>
  );
};

export default HomeScreen;
