"use client";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import LoadingSpinner from "./LoadingSpinner";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  createdAt: string;
}

const RecentBlogs = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/posts");
        const data = await res.json();
        setBlogs(data.slice(0, 3)); // Get only 3 most recent posts
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section className="py-16 md:py-24 flex flex-col items-center px-4 md:px-8 bg-[#0F0F0F]">
        <LoadingSpinner />
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 flex flex-col items-center px-4 md:px-8 bg-[#0F0F0F]">
      {/* Title */}
      <div className="relative w-full max-w-2xl mx-auto p-8 bg-[#1A1A1A] text-[#FFFFFF] border-4 border-[#333333] rounded-md shadow-[8px_8px_0_#333333] overflow-hidden mb-16">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
            backgroundSize: "8px 8px",
          }}
        />
        <h2 className="relative text-3xl md:text-4xl font-bold text-center z-10">
          Recent Blogs
        </h2>
      </div>

      {/* Blog Cards */}
      <div className="w-full max-w-7xl">
        {blogs.length > 0 ? (
          <div className="space-y-6">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} post={blog} variant="enlargeable" />
            ))}
          </div>
        ) : (
          <div className="relative w-full max-w-md mx-auto p-12 md:p-20 bg-[#1A1A1A] text-[#FFFFFF] border-4 border-[#333333] rounded-md shadow-[8px_8px_0_#333333] overflow-hidden">
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
