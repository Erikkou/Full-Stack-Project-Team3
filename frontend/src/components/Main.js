import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/components/Main.css';

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="main-page">
      <div className="main-buttons">
        <button className="main-btn signup-btn" onClick={() => navigate('/signup')}>
          Aanmelden
        </button>
        <button className="main-btn login-btn" onClick={() => navigate('/login')}>
          Log in
        </button>
      </div>
    </div>
  );
};

export default Main;
