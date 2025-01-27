import React, { useEffect, useState } from "react";
import Api from "../Api";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await Api.get("/blogs");
        setBlogs(response.data.slice(0, 9)); // Show only the first 9 blogs
      } catch (error) {
        setError("Failed to load blogs. Please try again later.");
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const truncateText = (text, limit) =>
      text.length > limit ? `${text.slice(0, limit)}...` : text;

  if (isLoading) {
    return <p className="text-center text-white">Loading blogs...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  return (
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Our Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
              <div
                  key={blog.id}
                  className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col hover:shadow-lg transition transform hover:-translate-y-2"
              >
                <div>
                  <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                  <p className="text-gray-400">Author: {blog.author}</p>
                  <p className="text-gray-400">Date: {blog.date}</p>
                  <img src={blog.img} alt="Italian Trulli"/>
                  <p className="text-gray-400 mt-2">{truncateText(blog.description, 100)}</p>
                  <a href={`/blog/show/${blog.id}`} className="text-blue-500 mt-2 hover:underline">
                    Read More
                  </a>
                </div>
              </div>
          ))}
        </div>
      </div>
  );
};

export default BlogPage;
