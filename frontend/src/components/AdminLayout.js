import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-gray-800 text-white">
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
      </aside>
      <main className="flex-1 p-6 bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md">{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
