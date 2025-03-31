"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // ✅ Import useParams
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import "highlight.js/styles/github-dark.css";
import LoadingSpinner from "@/components/LoadingSpinner";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  createdAt: string;
}

export default function BlogPage() {
  const params = useParams(); // ✅ Correct way to access params
  const slug = params.slug as string; // Convert to string
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/posts/${slug}`);
        console.log("Fetching post:", slug); // Debug log
        const data = await res.json();
        console.log("Received data:", data); // Debug log
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
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
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
    <section className="relative min-h-screen py-6 md:py-12 flex flex-col items-center px-3 md:px-8 bg-[#0F0F0F]">
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
          backgroundSize: "16px 16px",
          opacity: 0.1,
        }}
      />

      <div className="w-full max-w-4xl relative">
        {/* Back Button */}
        <Link href="/blogs">
          <button className="mb-4 md:mb-8 px-4 md:px-6 py-2 md:py-3 bg-[#1A1A1A] text-[#FFFFFF] text-base md:text-lg font-bold rounded-md border-3 md:border-4 border-[#FFFFFF] shadow-[3px_3px_0_#FFFFFF] md:shadow-[4px_4px_0_#FFFFFF] hover:bg-[#0077FF] hover:shadow-[4px_4px_0_#0056B3] transition-all">
            ← Back
          </button>
        </Link>

        {/* Title and Date Container */}
        <div className="relative bg-[#1A1A1A] border-3 md:border-4 border-[#FFFFFF] rounded-md shadow-[4px_4px_0_#FFFFFF] md:shadow-[8px_8px_0_#FFFFFF] overflow-hidden mb-4 md:mb-8">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
              backgroundSize: "8px 8px",
            }}
          />
          <div className="relative p-4 md:p-12">
            <h1 className="text-2xl md:text-5xl font-bold mb-3 md:mb-4 text-white">
              {post.title}
            </h1>
            <div className="text-sm text-gray-400">
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        </div>

        {/* Blog Content Container */}
        <article className="relative bg-white border-3 md:border-4 border-[#FFFFFF] rounded-md shadow-[4px_4px_0_#FFFFFF] md:shadow-[8px_8px_0_#FFFFFF] overflow-hidden">
          <div className="relative p-4 md:p-12">
            <div
              className="prose prose-sm md:prose-lg max-w-none 
              prose-headings:font-bold prose-headings:text-gray-900
              prose-h1:text-2xl md:prose-h1:text-4xl prose-h1:mb-4 md:prose-h1:mb-8 
              prose-h2:text-xl md:prose-h2:text-3xl prose-h2:mt-6 md:prose-h2:mt-10 prose-h2:mb-4 md:prose-h2:mb-6 
              prose-h3:text-lg md:prose-h3:text-2xl prose-h3:mt-4 md:prose-h3:mt-8 prose-h3:mb-2 md:prose-h3:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4 md:prose-p:mb-6
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900 prose-strong:font-bold
              prose-ul:list-disc prose-ul:pl-4 md:prose-ul:pl-6 prose-ul:my-4 md:prose-ul:my-6
              prose-ol:list-decimal prose-ol:pl-4 md:prose-ol:pl-6 prose-ol:my-4 md:prose-ol:my-6
              prose-li:text-gray-700 prose-li:mb-1 md:prose-li:mb-2
              prose-blockquote:border-l-4 prose-blockquote:border-blue-500
              prose-blockquote:pl-3 md:prose-blockquote:pl-4 prose-blockquote:py-1 prose-blockquote:my-4 md:prose-blockquote:my-6
              prose-blockquote:bg-blue-50 prose-blockquote:rounded-r
              prose-img:rounded-lg prose-img:shadow-md prose-img:my-4 md:prose-img:my-8
              prose-code:text-pink-600 prose-code:bg-gray-100 prose-code:text-sm md:prose-code:text-base
              prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-2 md:prose-pre:p-4 
              prose-pre:rounded-lg prose-pre:shadow-lg prose-pre:my-4 md:prose-pre:my-6
              prose-pre:text-sm md:prose-pre:text-base prose-pre:overflow-x-auto"
            >
              <ReactMarkdown
                rehypePlugins={[rehypeHighlight, rehypeRaw]}
                remarkPlugins={[remarkGfm]}
                components={{
                  code({
                    inline,
                    className,
                    children,
                    ...props
                  }: {
                    inline?: boolean;
                    className?: string;
                    children?: React.ReactNode;
                  }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                      <pre className={`${className} relative`}>
                        <div className="absolute top-0 right-0 px-2 py-1 text-xs text-gray-400 bg-gray-800 rounded-bl">
                          {match[1]}
                        </div>
                        <code className={className} {...props}>
                          {children}
                        </code>
                      </pre>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                  blockquote({ children }) {
                    return (
                      <blockquote className="italic">{children}</blockquote>
                    );
                  },
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
