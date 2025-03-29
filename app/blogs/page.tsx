"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

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
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-2xl font-bold">Loading...</div>
      </div>
    );
  }

  return (
    <section className="min-h-screen py-12 flex flex-col items-center px-4 md:px-8">
      {/* Title Card */}
      <div className="relative w-full max-w-2xl mx-auto p-8 bg-[#FFFFFF] text-[#0F0F0F] border-4 border-[#0F0F0F] rounded-md shadow-[8px_8px_0_#0F0F0F] overflow-hidden mb-12">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#0F0F0F 1px, transparent 1px)`,
            backgroundSize: "8px 8px",
          }}
        />
        <h1 className="relative text-4xl md:text-5xl font-bold text-center z-10">
          The JerkeyScript
        </h1>
      </div>

      {/* Blog Posts */}
      <div className="w-full max-w-4xl space-y-8">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Link
              key={post.id}
              href={`/blogs/${post.slug}`}
              className="block" // Add this to make the entire card clickable
            >
              <article className="bg-[#FFFFFF] border-4 border-[#0F0F0F] rounded-md shadow-[6px_6px_0_#0F0F0F] p-8 hover:shadow-[8px_8px_0_#0F0F0F] transition-all cursor-pointer">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.content}
                </p>
                <div className="text-sm text-gray-500">
                  {new Date(post.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </article>
            </Link>
          ))
        ) : (
          <div className="relative w-full bg-[#000000] text-[#FFFFFF] border-4 border-[#FFFFFF] border-t-[#0F0F0F] border-l-[#0F0F0F] rounded-md shadow-[8px_8px_0_#0F0F0F] overflow-hidden p-12">
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
                backgroundSize: "8px 8px",
              }}
            />
            <div className="relative text-center">
              <h3 className="text-4xl md:text-6xl font-bold mb-4">
                No Blogs Available
              </h3>
              <p className="text-xl text-gray-300">
                Check back later for updates!
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
