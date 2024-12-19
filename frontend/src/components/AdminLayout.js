import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-transparent left-0 right-0 w-full">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white fixed top-0 bottom-0 left-0 h-full">
        <div className="p-4 font-bold text-center">Admin Dashboard</div>
        <nav className="mt-4">
          <ul className="flex flex-col space-y-2">
            
            <li className="px-4 py-2 hover:bg-gray-700 rounded">
              <a href="/admin/competitions">Competities</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 rounded">
              <a href="/admin/settings">Instellingen</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 bg-transparent overflow-y-auto min-h-screen w-f">
        <div className="bg-transparent p-6 rounded-lg shadow-md mb-6 mt-24">
          

          {/* Three equal rectangular elements (cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-red-800 p-6 rounded-lg shadow-md flex flex-col items-center justify-center opacity-90">
              <h2 className="text-xl font-semibold mb-4 !text-white">Card 1</h2>
              <p className="text-center">Some content here for card 1</p>
            </div>

            {/* Card 2 */}
            <div className="bg-red-800 p-6 rounded-lg shadow-md flex flex-col items-center justify-center opacity-90">
              <h2 className="text-xl font-semibold mb-4 !text-white">Card 2</h2>
              <p className="text-center">Some content here for card 2</p>
            </div>

            {/* Card 3 */}
            <div className="bg-red-800 p-6 rounded-lg shadow-md flex flex-col items-center justify-center opacity-90">
              <h2 className="text-xl font-semibold mb-4 !text-white">Card 3</h2>
              <p className="text-center">Some content here for card 3</p>
            </div>
          </div>
        </div>

        {/* Children Content */}
        <div className="bg-white p-6 rounded-lg shadow-md">{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
