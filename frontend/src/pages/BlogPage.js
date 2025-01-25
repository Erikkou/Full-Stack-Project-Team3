// Blog pagina voor iedereen

import React from "react";

// Dummy data. Je kunt dit later vervangen met data opgehaald van een API of een state management oplossing.
const blogs = [
  {
    id: 1,
    title: "The Rise of AI in Football",
    author: "John Doe",
    date: "2024-12-01",
    excerpt:
      "Artificial intelligence is changing the way football teams analyze performance and plan strategies. Learn how AI is transforming the beautiful game.",
  },
  {
    id: 2,
    title: "Top 10 Teams of the Decade",
    author: "Jane Smith",
    date: "2024-11-20",
    excerpt:
      "From dominating European competitions to setting new records, discover the most successful teams of the past decade.",
  },
  {
    id: 3,
    title: "How to Train Like a Pro",
    author: "Chris Johnson",
    date: "2024-11-15",
    excerpt:
      "Take your training to the next level with tips and techniques used by professional athletes worldwide.",
  },
];

const BlogPage = () => {
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
              <p className="text-gray-400 mt-2">{blog.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
