"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import LoadingSpinner from "@/components/LoadingSpinner";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  createdAt: string;
}

interface PageProps {
  params: { slug: string };
}

export default function BlogPage({ params }: PageProps) {
  const slug = params.slug;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/posts/${slug}`);
        console.log("Fetching post:", slug);
        const data = await res.json();
        console.log("Received data:", data);
        setPost(data);
      } catch (error) {
        console.error("Failed to fetch post:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <LoadingSpinner />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-2xl font-bold text-white">Blog post not found</div>
      </div>
    );
  }

  return (
    <section className="min-h-screen flex flex-col bg-black py-8 md:py-12 px-4 md:px-16">
      {/* Back Button */}
      <div className="w-full max-w-4xl mx-auto mb-8 flex justify-start">
        {" "}
        {/* Adjusted alignment */}
        <Link href="/blogs">
          <button className="px-4 py-2 bg-black text-white font-medium rounded-md border-2 border-[#333333] shadow-[3px_3px_0_#333333] hover:shadow-[4px_4px_0_#0077FF] hover:border-[#0077FF] transition-all duration-200">
            ← Back to blogs
          </button>
        </Link>
      </div>

      {/* Header */}
      <header className="w-full max-w-4xl mx-auto mb-8 flex flex-col items-start">
        {" "}
        {/* Centered and aligned */}
        <div className="flex items-center gap-3 mb-2">
          <span className="block w-2 h-10 bg-[#0077FF] rounded-sm" />
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {post.title}
          </h1>
        </div>
        <div className="text-base text-gray-400 pl-3">
          {new Date(post.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </header>

      {/* Blog Content */}
      <article className="w-full max-w-4xl mx-auto px-4">
        {" "}
        {/* Centered and adjusted margins */}
        <div className="prose prose-lg max-w-none prose-invert prose-headings:font-bold prose-headings:text-gray-100 prose-h1:text-3xl md:prose-h1:text-4xl prose-h2:text-2xl md:prose-h2:text-3xl prose-h3:text-xl md:prose-h3:text-2xl prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6 prose-a:text-[#0077FF] prose-a:underline hover:prose-a:text-[#3399ff] prose-strong:text-gray-200 prose-strong:font-bold prose-blockquote:border-l-4 prose-blockquote:border-[#0077FF] prose-blockquote:pl-4 prose-blockquote:py-1 prose-blockquote:my-4 prose-blockquote:bg-[#181828] prose-blockquote:rounded-r prose-img:rounded-lg prose-img:my-6 prose-img:max-w-full prose-img:h-auto prose-code:text-pink-400 prose-code:bg-[#232323] prose-code:text-base prose-pre:bg-[#181828] prose-pre:text-gray-300 prose-pre:p-4 prose-pre:rounded-lg prose-pre:shadow-lg prose-pre:my-6 [&>*]:max-w-full">
          <ReactMarkdown
            rehypePlugins={[rehypeHighlight, rehypeRaw]}
            remarkPlugins={[remarkGfm]}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </section>
  );
}
