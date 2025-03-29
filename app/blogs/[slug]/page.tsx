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

export default function BlogPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/posts/${params.slug}`);
        console.log("Fetching post:", params.slug); // Debug log
        const data = await res.json();
        console.log("Received data:", data); // Debug log
        setPost(data);
      } catch (error) {
        console.error("Failed to fetch post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-2xl font-bold">Loading...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl font-bold">Blog post not found</div>
      </div>
    );
  }

  return (
    <section className="min-h-screen py-12 flex flex-col items-center px-4 md:px-8">
      <div className="w-full max-w-4xl">
        {/* Back Button */}
        <Link href="/blogs">
          <button className="mb-8 px-6 py-3 bg-[#FFFFFF] text-[#0F0F0F] text-lg font-bold rounded-md border-4 border-[#0F0F0F] shadow-[4px_4px_0_#0F0F0F] hover:bg-[#0077FF] hover:text-[#FFFFFF] hover:shadow-[6px_6px_0_#0056B3] transition-all">
            ← Back to Blogs
          </button>
        </Link>

        {/* Blog Content */}
        <article className="relative bg-[#FFFFFF] border-4 border-[#0F0F0F] rounded-md shadow-[8px_8px_0_#0F0F0F] overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#0F0F0F 1px, transparent 1px)`,
              backgroundSize: "8px 8px",
            }}
          />
          <div className="relative p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            <div className="text-sm text-gray-500 mb-8">
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="prose prose-lg max-w-none">
              {post.content.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-800">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
