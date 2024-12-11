// frontend/src/components/SignUp.js
import React from 'react';

const SignUp = () => {
  return (
    <div className="signup-page">
      <h2>Aanmelden</h2>
      <form>
        {/* Voeg je formulier velden hier toe */}
        <input type="text" placeholder="Naam" />
        <input type="email" placeholder="E-mail" />
        <button type="submit">Aanmelden</button>
      </form>
    </div>
  );
};

export default SignUp;
