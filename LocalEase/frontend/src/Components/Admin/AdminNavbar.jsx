import React from 'react';
import './AdminNavBar.css'; // import CSS file for styling

function AdminNavBar() {
  return (
    <nav className="admin-nav">
      <div className="nav-logo">Admin Panel</div>
      <div className="nav-search">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <ul className="nav-links">
        <li><a href="#">Products</a></li>
        <li><a href="#">Add Products</a></li>
        <li><a href="#">Users Management</a></li>
        <li><a href="#">Orders</a></li>
      </ul>
    </nav>
  );
}

export default AdminNavBar;