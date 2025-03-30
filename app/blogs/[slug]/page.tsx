"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // ✅ Import useParams
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import "highlight.js/styles/github-dark.css";

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
    <section className="min-h-screen py-12 flex flex-col items-center px-4 md:px-8 bg-gray-50">
      <div className="w-full max-w-4xl">
        {/* Back Button */}
        <Link href="/blogs">
          <button className="mb-8 px-6 py-3 bg-[#FFFFFF] text-[#0F0F0F] text-lg font-bold rounded-md border-4 border-[#0F0F0F] shadow-[4px_4px_0_#0F0F0F] hover:bg-[#0077FF] hover:text-[#FFFFFF] hover:shadow-[6px_6px_0_#0056B3] transition-all">
            ←
          </button>
        </Link>

        {/* Blog Content */}
        <article className="relative bg-white border-4 border-[#0F0F0F] rounded-md shadow-[8px_8px_0_#0F0F0F] overflow-hidden">
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
            <div
              className="prose prose-lg max-w-none 
              prose-headings:font-bold 
              prose-h1:text-4xl prose-h1:mb-8 
              prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-6 
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900 prose-strong:font-bold
              prose-ul:list-disc prose-ul:pl-6 prose-ul:my-6
              prose-ol:list-decimal prose-ol:pl-6 prose-ol:my-6
              prose-li:text-gray-700 prose-li:mb-2
              prose-blockquote:border-l-4 prose-blockquote:border-blue-500
              prose-blockquote:pl-4 prose-blockquote:py-1 prose-blockquote:my-6
              prose-blockquote:bg-blue-50 prose-blockquote:rounded-r
              prose-img:rounded-lg prose-img:shadow-md prose-img:my-8
              prose-code:text-pink-600 prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded
              prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 
              prose-pre:rounded-lg prose-pre:shadow-lg prose-pre:my-6
              prose-pre:overflow-x-auto"
            >
              <ReactMarkdown
                rehypePlugins={[rehypeHighlight, rehypeRaw]}
                remarkPlugins={[remarkGfm]}
                components={{
                  code({ node, inline, className, children, ...props }) {
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
                  blockquote({ node, children }) {
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
