"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";
import LoadingSpinner from "@/components/LoadingSpinner";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  createdAt: string;
}

export default function BlogsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/posts");
        const data = await res.json();
        setPosts(data);
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
      <div className="min-h-screen flex items-center justify-center bg-[#0F0F0F]">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="bg-[#0F0F0F]">
      <Navbar currentPage="blogs" />
      <section className="min-h-screen py-12 flex flex-col items-center px-4 md:px-8">
        {/* Title Card */}
        <div className="relative w-full max-w-2xl mx-auto p-8 bg-[#1A1A1A] text-[#FFFFFF] border-4 border-[#333333] rounded-md shadow-[8px_8px_0_#333333] overflow-hidden mb-12">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
              backgroundSize: "8px 8px",
            }}
          />
          <h1 className="relative text-4xl md:text-5xl font-bold text-center z-10">
            The JerkeyScript
          </h1>
        </div>

        {/* Blog Posts */}
        <div className="w-full max-w-7xl space-y-6">
          {posts.length > 0 ? (
            posts.map((post) => (
              <BlogCard key={post.id} post={post} variant="default" />
            ))
          ) : (
            <div className="relative w-full bg-[#1A1A1A] text-[#FFFFFF] border-4 border-[#333333] rounded-md shadow-[8px_8px_0_#333333] overflow-hidden p-4 md:p-12">
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
                  backgroundSize: "8px 8px",
                }}
              />
              <div className="relative text-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 break-words">
                  No Blogs Available
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-300">
                  Check back later for updates!
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
