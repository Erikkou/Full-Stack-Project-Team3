import React, {useEffect, useState} from "react";
import {useParams, Link} from "react-router-dom";
import Api from "../Api";

const BlogDetails = () => {
    const {id} = useParams();
    const [blog, setBlog] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await Api.get(`/blog/show/${id}`);
                setBlog(response.data);
            } catch (error) {
                setError("Failed to load the blog. Please try again later.");
                console.error("Error fetching blog details:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    if (isLoading) {
        return <p className="text-center text-white">Loading blog...</p>;
    }

    if (error) {
        return <p className="text-red-500 text-center">{error}</p>;
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <Link to="/blogs" className="text-blue-500 hover:underline">
                &larr; Back to Blogs
            </Link>
            <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
                <p className="text-gray-400 mb-2">Author: {blog.author}</p>
                <p className="text-gray-400 mb-6">Date: {blog.date}</p>
                <p className="text-gray-300">{blog.description}</p>
            </div>
        </div>
    );
};

export default BlogDetails;
