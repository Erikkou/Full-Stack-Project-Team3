import React, { useState } from "react";
import { Link } from "react-router-dom";

// Dummy blogs data (to be replaced with data from the database)
const initialBlogs = [
  { 
    id: 1, 
    title: "The Rise of AI in Football", 
    author: "John Doe", 
    date: "2024-12-01",
    excerpt: "Artificial intelligence is changing the way football teams analyze performance and plan strategies. Learn how AI is transforming the beautiful game."
  },
  { 
    id: 2, 
    title: "Top 10 Teams of the Decade", 
    author: "Jane Smith", 
    date: "2024-11-20",
    excerpt: "From dominating European competitions to setting new records, discover the most successful teams of the past decade."
  },
  { 
    id: 3, 
    title: "How to Train Like a Pro", 
    author: "Chris Johnson", 
    date: "2024-11-15",
    excerpt: "Take your training to the next level with tips and techniques used by professional athletes worldwide."
  },
];

const Blogs = () => {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [editBlog, setEditBlog] = useState(null); // Stores the blog being edited
  const [isEditing, setIsEditing] = useState(false); // Tracks if the edit form is open

  // Handler for the "Remove" button
  const handleRemove = (id) => {
    if (window.confirm("Are you sure you want to remove this blog?")) {
      setBlogs(blogs.filter((blog) => blog.id !== id));
    }
  };

  // Handler for the "Edit" button
  const handleEdit = (blog) => {
    setEditBlog(blog);
    setIsEditing(true);
  };

  // Handler for saving edits
  const handleSaveEdit = () => {
    setBlogs(
      blogs.map((blog) =>
        blog.id === editBlog.id ? editBlog : blog
      )
    );
    setIsEditing(false);
    setEditBlog(null);
  };

  // Handler for canceling the edit
  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditBlog(null);
  };

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
      {!isEditing ? (
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
                <p className="text-gray-400 mt-2">{blog.excerpt}</p>
              </div>
              <div className="mt-4 flex space-x-2">
                <button
                  onClick={() => handleEdit(blog)}
                  className="bg-green-600 hover:bg-green-500 text-white font-bold py-1 px-3 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleRemove(blog.id)}
                  className="bg-red-600 hover:bg-red-500 text-white font-bold py-1 px-3 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Edit Form
        <div className="bg-gray-900 p-6 rounded-lg shadow-md max-w-lg mx-auto">
          <h2 className="text-xl font-bold mb-4">Edit Blog</h2>
          <label className="block mb-2 text-gray-400">Title</label>
          <input
            type="text"
            value={editBlog.title}
            onChange={(e) =>
              setEditBlog({ ...editBlog, title: e.target.value })
            }
            className="w-full p-2 rounded bg-gray-700 text-white mb-4"
          />
          <label className="block mb-2 text-gray-400">Author</label>
          <input
            type="text"
            value={editBlog.author}
            onChange={(e) =>
              setEditBlog({ ...editBlog, author: e.target.value })
            }
            className="w-full p-2 rounded bg-gray-700 text-white mb-4"
          />
          <label className="block mb-2 text-gray-400">Excerpt</label>
          <textarea
            value={editBlog.excerpt}
            onChange={(e) =>
              setEditBlog({ ...editBlog, excerpt: e.target.value })
            }
            className="w-full p-2 rounded bg-gray-700 text-white mb-4"
          ></textarea>
          <div className="flex justify-between">
            <button
              onClick={handleSaveEdit}
              className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
            >
              Save
            </button>
            <button
              onClick={handleCancelEdit}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
