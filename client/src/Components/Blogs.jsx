import React from "react";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    id: "browser-os",
    title: "What if the Browser Becomes the OS? Exploring the Future of Web-Based Computing",
    date: "April 30, 2025",
    author: "Yaswanth Vijjapu",
    path: "/blog/browser-os",
    tags: ["Web", "Cloud", "Future Tech"]
  }
];

const Blogs = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-[#F9FAFB] dark:bg-[#1F2937] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Sticky Top Navigation */}
        <div className="sticky top-0 z-20 bg-[#F9FAFB] dark:bg-[#1F2937] py-2">
          <button
            onClick={() => navigate("/")}
            className="ml-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white text-sm font-medium px-4 py-2 rounded-lg shadow"
          >
            ← Back to Home
          </button>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-[#111827] dark:text-[#F3F4F6]">
          📝 My Tech Blogs
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white dark:bg-[#374151] rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer p-6 flex flex-col justify-between"
              onClick={() => navigate(blog.path)}
            >
              <div>
                <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-2">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {blog.date} | {blog.author}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
