import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext"; // Importeer AuthContext

const Navbar = () => {
  const { authState } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 right-0 w-full shadow-lg z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-10 w-10 mr-2" />
          <span className="text-2xl font-bold">Scori2</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-400 transition duration-200">
            Home
          </Link>
          {authState.isLoggedIn && authState.role === "beheer" && (
            <Link
              to="/admin"
              className="hover:text-blue-400 transition duration-200"
            >
              Admin Dashboard
            </Link>
          )}
          {authState.isLoggedIn && authState.role === "user" && (
            <Link
              to="/dashboard"
              className="hover:text-blue-400 transition duration-200"
            >
              Mijn Dashboard
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
