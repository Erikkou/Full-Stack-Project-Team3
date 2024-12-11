// frontend/src/components/Navbar.js
import React from 'react';
import '../styles/components/Navbar.css';

const Navbar = ({ showMain, showSignUp, showLogin, showAbout }) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a className="navbar-link" onClick={showMain}>Home</a>
        </li>
        <li>
          <a className="navbar-link" onClick={showSignUp}>Aanmelden</a>
        </li>
        <li>
          <a className="navbar-link" onClick={showLogin}>Inloggen</a>
        </li>
        <li>
          <a className="navbar-link" onClick={showAbout}>Over Ons</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
