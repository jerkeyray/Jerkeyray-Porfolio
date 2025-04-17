"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";
import LoadingSpinner from "@/components/LoadingSpinner";
import { FaPen } from "react-icons/fa";

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
      <div className="min-h-screen flex items-center justify-center bg-black">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <section className="min-h-screen flex flex-col items-start justify-start py-20 bg-black px-4 md:px-16">
      <div className="w-full max-w-2xl mx-auto mb-10">
        {/* Blogs Section */}
        <div className="text-white space-y-8 pl-2">
          <div className="flex items-center space-x-2 text-[#0077FF]">
            <span className="text-4xl font-bold font-mono">&gt;</span>
            <h2 className="text-4xl font-medium tracking-wide text-white">
              blog
            </h2>
          </div>

          <div className="space-y-6 pt-2">
            {posts.length > 0 ? (
              posts.map((post) => (
                <BlogCard key={post.id} post={post} variant="default" />
              ))
            ) : (
              <div className="relative w-full bg-[#1A1A1A] border-2 border-[#333333] rounded-lg shadow-[4px_4px_0_#333333] overflow-hidden transition-all duration-300 hover:shadow-[6px_6px_0_#333333] p-5">
                <div className="flex items-center justify-center py-8">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <FaPen className="text-4xl text-gray-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                      No Blog Posts Yet
                    </h3>
                    <p className="text-gray-400">
                      Check back soon for new articles
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Navbar />
    </section>
  );
}
