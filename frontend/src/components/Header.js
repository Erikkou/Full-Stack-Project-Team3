// frontend/src/components/Header.js
import React from 'react';
import '../styles/components/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Welkom bij Scori2</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
