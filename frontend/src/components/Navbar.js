// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li>
          <Link to="/signup" className="navbar-link">Aanmelden</Link>
        </li>
        <li>
          <Link to="/login" className="navbar-link">Inloggen</Link>
        </li>
        <li>
          <Link to="/admin" className="navbar-link">Admin Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
