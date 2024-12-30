import React from "react";
import { Link } from "react-router-dom";

// hier moeten de blogs van de db geïmporteerd worden, voor nu dummy data
const blogs = [
  { id: 1, title: "The Rise of AI in Football", author: "John Doe", date: "2024-12-01" },
  { id: 2, title: "Top 10 Teams of the Decade", author: "Jane Smith", date: "2024-11-20" },
  { id: 3, title: "How to Train Like a Pro", author: "Chris Johnson", date: "2024-11-15" },
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white p-6 left-0 right-0 w-full opacity-90">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Blogs</h1>
        <Link
          to="/admin"
          className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          Back to Dashboard
        </Link>
      </div>

      {/* New Blog Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold !text-white">Manage Your Blogs</h2>
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
          Add New Blog
        </button>
      </div>

      {/* Blog List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-gray-900 p-4 rounded-lg shadow-md flex flex-col justify-between hover:shadow-lg transition transform hover:-translate-y-2"
          >
            <div>
              <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
              <p className="text-gray-400">Author: {blog.author}</p>
              <p className="text-gray-400">Date: {blog.date}</p>
            </div>
            <div className="mt-4 flex space-x-2">
              <button className="bg-green-600 hover:bg-green-500 text-white font-bold py-1 px-3 rounded">
                Edit
              </button>
              <button className="bg-red-600 hover:bg-red-500 text-white font-bold py-1 px-3 rounded">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
