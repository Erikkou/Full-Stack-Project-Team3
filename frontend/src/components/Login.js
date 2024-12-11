// frontend/src/components/Login.js
import React from 'react';

const Login = () => {
  return (
    <div className="login-page">
      <h2>Inloggen</h2>
      <form>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Wachtwoord" />
        <button type="submit">Inloggen</button>
      </form>
    </div>
  );
};

export default Login;
