import Link from "next/link";
import React from "react";

const blogs = [
  {
    title: "Building a Portfolio with Next.js",
    excerpt:
      "How I used Next.js and Tailwind CSS to create a sleek developer portfolio.",
    date: "March 15, 2025",
    slug: "/blog/building-a-portfolio-with-nextjs",
  },
  {
    title: "Getting Started with Prisma and Supabase",
    excerpt:
      "A beginner’s guide to setting up a database with Prisma and Supabase.",
    date: "March 10, 2025",
    slug: "/blog/prisma-supabase-guide",
  },
  {
    title: "Why I Love TypeScript",
    excerpt: "Exploring the benefits of TypeScript in modern web development.",
    date: "March 5, 2025",
    slug: "/blog/why-i-love-typescript",
  },
];

const RecentBlogs = () => {
  return (
    <section className="py-12  flex flex-col items-center">
      {/* Title */}
      <div className="relative w-full max-w-2xl mx-4 p-8 bg-[#FFFFFF] text-[#0F0F0F] border-4 border-[#0F0F0F] rounded-md shadow-[8px_8px_0_#0F0F0F]  overflow-hidden mb-8">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#0F0F0F 1px, transparent 1px)`,
            backgroundSize: "8px 8px",
          }}
        />
        <h2 className="relative text-4xl md:text-5xl font-bold text-center z-10">
          Recent Blogs
        </h2>
      </div>

      {/* Blog Cards */}
      <div className="max-w-6xl w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <Link key={index} href={blog.slug}>
              <div className="bg-[#FFFFFF] border-2 border-[#0F0F0F] rounded-md shadow-[4px_4px_0_#0F0F0F] p-6  transition-all">
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
      </div>
    </section>
  );
};

export default RecentBlogs;
