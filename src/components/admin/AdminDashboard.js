// src/components/admin/AdminDashboard.js
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import UserManagement from './UserManagement';
import AdminFeedback from './AdminFeedback';
import AdminJobApplications from './AdminJobApplications';
import WasteManagement from './WasteManagement';
import '../../assets/styles/AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <div className="admin-dashboard">
      <nav className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li><Link to="/admin/dashboard">Dashboard</Link></li>
          <li><Link to="/user">User Management</Link></li>
          <li><Link to="/admin/products">Product Management</Link></li>
          <li><Link to="/admin/orders">Order Management</Link></li>
          <li><Link to="/wastemanage">Waste Management</Link></li>
          <li><Link to="/feed">Feedbacks</Link></li>
          <li><Link to="/jobapp">Job Applications</Link></li>
        </ul>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <main className="content">
        <h1>Admin Dashboard</h1>
        <section className="dashboard-overview">
          <div className="dashboard-stats">
            <div className="stat-card">
              <h2>Total Users</h2>
              <p>12</p> {/* Replace with dynamic data */}
            </div>
            <div className="stat-card">
              <h2>Total Waste Requests</h2>
              <p>9</p> {/* Replace with dynamic data */}
            </div>
            <div className="stat-card">
              <h2>Total Feedbacks</h2>
              <p>3</p> {/* Replace with dynamic data */}
            </div>
            <div className="stat-card">
              <h2>Pending Job Applications</h2>
              <p>5</p> {/* Replace with dynamic data */}
            </div>
          </div>
        </section>
        <Routes>
          <Route path="/users" element={<UserManagement />} />
          <Route path="/feed" element={<AdminFeedback />} />
          <Route path="/jobapp" element={<AdminJobApplications />} />
          <Route path="/wastemanage" element={<WasteManagement />} />
          {/* Add other routes here */}
        </Routes>
      </main>
    </div>
  );
};

export default AdminDashboard;
