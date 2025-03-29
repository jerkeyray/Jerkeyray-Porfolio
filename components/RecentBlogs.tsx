import Link from "next/link";
import React from "react";

const blogs = []; // Empty array to simulate no blogs available

const RecentBlogs = () => {
  return (
    <section className="py-12 flex flex-col items-center px-4 md:px-8">
      {/* Title */}
      <div className="relative w-full max-w-xl mx-auto p-6 bg-[#FFFFFF] text-[#0F0F0F] border-4 border-[#0F0F0F] rounded-md shadow-[8px_8px_0_#0F0F0F] overflow-hidden mb-8">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#0F0F0F 1px, transparent 1px)`,
            backgroundSize: "8px 8px",
          }}
        />
        <h2 className="relative text-3xl md:text-4xl font-bold text-center z-10">
          Recent Blogs
        </h2>
      </div>

      {/* Blog Cards */}
      <div className="max-w-6xl w-full">
        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <Link key={index} href={blog.slug}>
                <div className="bg-[#FFFFFF] border-2 border-[#0F0F0F] rounded-md shadow-[4px_4px_0_#0F0F0F] p-6 transition-all">
                  <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                  <p className="text-sm text-gray-600 group-hover:text-white mb-4">
                    {blog.excerpt}
                  </p>
                  <p className="text-xs text-gray-500 group-hover:text-white">
                    {blog.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="relative w-full max-w-md mx-auto p-12 md:p-20 bg-[#000000] text-[#FFFFFF] border-4 border-[#FFFFFF] border-t-[#0F0F0F] border-l-[#0F0F0F] rounded-md shadow-[8px_8px_0_#0F0F0F] overflow-hidden">
            {/* Dotted Background */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
                backgroundSize: "8px 8px",
              }}
            />
            <div className="relative text-center">
              <h3 className="text-4xl md:text-7xl font-bold mb-6 md:mb-8">
                No Blogs Available
              </h3>
              <p className="text-base md:text-2xl text-gray-300">
                Check back later for updates!
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentBlogs;
