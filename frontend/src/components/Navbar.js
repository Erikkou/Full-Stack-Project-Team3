// frontend/src/components/Navbar.js
import React from 'react';
import '../styles/components/Navbar.css';
import logo from '../image/logo.png';


const Navbar = ({ showMain, showContacts, showAbout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Scori2 Logo" className="logo" />
      </div>
      <ul>
        <li>
          <a className="navbar-link" onClick={showMain}>Home</a>
        </li>
        <li>
          <a className="navbar-link" onClick={showAbout}>Over Ons</a>
        </li>
        <li>
          <a className="navbar-link" onClick={showContacts}>Contacts</a>
        </li>
        </ul>
    </nav>
  );
};

export default Navbar;
