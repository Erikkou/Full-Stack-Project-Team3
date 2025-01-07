import React, { createContext, useState } from "react";

// Maak de AuthContext
export const AuthContext = createContext();

// Provider-component om de context te delen
export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isLoggedIn: false,
    role: null, // "beheer" of "user"
  });

  const login = (role) => {
    setAuthState({ isLoggedIn: true, role });
  };

  const logout = () => {
    setAuthState({ isLoggedIn: false, role: null });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
