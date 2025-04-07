"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
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
  const params = useParams();
  const slug = params.slug as string;
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
      <div className="h-screen flex items-center justify-center bg-[#0F0F0F]">
        <LoadingSpinner />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#0F0F0F]">
        <div className="text-2xl font-bold text-white">Blog post not found</div>
      </div>
    );
  }

  return (
    <section className="relative py-6 md:py-12 flex flex-col items-center px-3 md:px-8 bg-[#0F0F0F]">
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(#333333 1px, transparent 1px)`,
          backgroundSize: "16px 16px",
          opacity: 0.1,
        }}
      />

      <div className="w-full max-w-4xl relative z-10 min-h-screen flex flex-col">
        {/* Back Button */}
        <Link href="/blogs">
          <button className="mb-4 md:mb-8 px-4 md:px-6 py-2 md:py-3 bg-[#1A1A1A] text-[#FFFFFF] text-base md:text-lg font-bold rounded-md border-3 md:border-4 border-[#333333] shadow-[3px_3px_0_#333333] md:shadow-[4px_4px_0_#333333] hover:bg-[#0077FF] hover:shadow-[4px_4px_0_#0056B3] transition-all">
            ← Back
          </button>
        </Link>

        {/* Title and Date Container */}
        <div className="relative bg-[#1A1A1A] border-3 md:border-4 border-[#333333] rounded-md shadow-[4px_4px_0_#333333] md:shadow-[8px_8px_0_#333333] overflow-hidden mb-4 md:mb-8">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#666666 1px, transparent 1px)`,
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
        <article className="relative bg-[#1A1A1A] border-3 md:border-4 border-[#333333] rounded-md shadow-[4px_4px_0_#333333] md:shadow-[8px_8px_0_#333333] overflow-hidden flex-1">
          <div className="relative p-4 md:p-12 overflow-y-auto">
            <div
              className="prose prose-sm md:prose-lg max-w-none 
              prose-invert
              prose-headings:font-bold prose-headings:text-gray-100
              prose-h1:text-2xl md:prose-h1:text-4xl prose-h1:mb-4 md:prose-h1:mb-8 
              prose-h2:text-xl md:prose-h2:text-3xl prose-h2:mt-6 md:prose-h2:mt-10 prose-h2:mb-4 md:prose-h2:mb-6 
              prose-h3:text-lg md:prose-h3:text-2xl prose-h3:mt-4 md:prose-h3:mt-8 prose-h3:mb-2 md:prose-h3:mb-4
              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4 md:prose-p:mb-6
              prose-p:break-words prose-p:hyphens-auto
              prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-a:break-words
              prose-strong:text-gray-200 prose-strong:font-bold
              prose-ul:list-disc prose-ul:pl-4 md:prose-ul:pl-6 prose-ul:my-4 md:prose-ul:my-6
              prose-ol:list-decimal prose-ol:pl-4 md:prose-ol:pl-6 prose-ol:my-4 md:prose-ol:my-6
              prose-li:text-gray-300 prose-li:mb-1 md:prose-li:mb-2 prose-li:break-words
              prose-blockquote:border-l-4 prose-blockquote:border-blue-500
              prose-blockquote:pl-3 md:prose-blockquote:pl-4 prose-blockquote:py-1 prose-blockquote:my-4 md:prose-blockquote:my-6
              prose-blockquote:bg-[#232323] prose-blockquote:rounded-r
              prose-img:rounded-lg prose-img:shadow-md prose-img:my-4 md:prose-img:my-8 prose-img:max-w-full prose-img:h-auto
              prose-code:text-pink-400 prose-code:bg-[#232323] prose-code:text-sm md:prose-code:text-base prose-code:break-words prose-code:whitespace-pre-wrap
              prose-pre:bg-[#121212] prose-pre:text-gray-300 prose-pre:p-2 md:prose-pre:p-4 
              prose-pre:rounded-lg prose-pre:shadow-lg prose-pre:my-4 md:prose-pre:my-6
              prose-pre:text-sm md:prose-pre:text-base prose-pre:overflow-x-auto
              [&>*]:max-w-full"
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
                      <pre className={`${className} relative overflow-x-auto`}>
                        <div className="absolute top-0 right-0 px-2 py-1 text-xs text-gray-400 bg-gray-900 rounded-bl">
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
                  img({ src, alt }) {
                    return (
                      <img src={src} alt={alt} className="max-w-full h-auto" />
                    );
                  },
                  // Ensure tables are responsive
                  table({ children }) {
                    return (
                      <div className="overflow-x-auto">
                        <table>{children}</table>
                      </div>
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
