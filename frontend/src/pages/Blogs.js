import React from "react";
import { Link } from "react-router-dom";

// hier moeten de blogs van de db geïmporteerd worden, voor nu dummy data
const blogs = [
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
  { 
    id: 4, 
    title: "The Evolution of Football Tactics", 
    author: "Alex Carter", 
    date: "2024-10-30",
    excerpt: "Explore how football tactics have evolved over the years and what the future holds for strategic gameplay."
  },
  { 
    id: 5, 
    title: "The Role of Fans in Modern Football", 
    author: "Sophia Wilson", 
    date: "2024-10-15",
    excerpt: "Football fans are the heart and soul of the sport. Discover how their influence has shaped the modern football experience."
  },
  { 
    id: 6, 
    title: "Sustainability in Sports", 
    author: "Michael Brown", 
    date: "2024-09-20",
    excerpt: "Sports organizations are adopting sustainable practices to reduce their environmental impact. Learn how football is going green."
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white p-6 left-0 right-0 w-full opacity-90">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Blogs</h1>
        
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
              <p className="text-gray-400 mt-2">{blog.excerpt}</p>
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
