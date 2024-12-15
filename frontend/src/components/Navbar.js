// frontend/src/components/Navbar.js
import React from 'react';
import '../styles/components/Navbar.css';


const Navbar = ({ showMain, showContacts, showAbout }) => {
  return (
    <nav className="navbar">
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
