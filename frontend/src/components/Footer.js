import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-2 fixed bottom-0 left-0 right-0 w-full">
      <div className="container mx-auto flex justify-center items-center">
        <div className="text-sm text-center">
          © {new Date().getFullYear()} Scori2. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
