import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white">
        <div className="p-4 font-bold text-center">Admin Dashboard</div>
        <nav className="mt-4">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="/admin">Dashboard</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="/admin/competitions">Competities</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <a href="/admin/settings">Instellingen</a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Main Content */}
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
};

export default AdminLayout;
