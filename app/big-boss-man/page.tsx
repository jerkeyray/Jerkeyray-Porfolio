"use client";

import { useEffect, useState, useTransition } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Link from "next/link";

type Post = {
  id: string;
  title: string;
  slug: string;
  createdAt: string;
};

export default function AdminPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isPending, startTransition] = useTransition();
  const [deletingSlug, setDeletingSlug] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/api/posts");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchPosts();
  }, []);

  const handleDelete = async (slug: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;
    setDeletingSlug(slug);
    startTransition(async () => {
      const res = await fetch(`/api/posts/${slug}`, { method: "DELETE" });
      if (res.ok) {
        setPosts((prev) => prev.filter((post) => post.slug !== slug));
      } else {
        console.error("Failed to delete post");
      }
      setDeletingSlug(null);
    });
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white max-w-3xl mx-auto space-y-4 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <Link href="/big-boss-man/create">
          <button className="bg-[#1A1A1A] text-white px-6 py-3 rounded-md border-4 border-[#FFFFFF] shadow-[4px_4px_0_#FFFFFF] hover:bg-[#0077FF] hover:shadow-[6px_6px_0_#0056B3] transition-all">
            + New Post
          </button>
        </Link>
      </div>
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <div className="space-y-4">
          {posts.map(({ id, title, slug, createdAt }) => (
            <div
              key={id}
              className="bg-[#1A1A1A] border-4 border-[#FFFFFF] p-4 rounded-md shadow-[4px_4px_0_#FFFFFF]"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-bold text-white">{title}</h2>
                  <p className="text-sm text-gray-400">
                    {new Date(createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <div className="flex gap-3">
                  <Link href={`/big-boss-man/edit/${slug}`}>
                    <button className="p-2 text-white hover:text-[#0077FF] transition-colors">
                      <FaEdit size={18} />
                    </button>
                  </Link>
                  <button
                    className="p-2 text-red-400 hover:text-red-500 disabled:opacity-50"
                    onClick={() => handleDelete(slug)}
                    disabled={isPending && deletingSlug === slug}
                  >
                    {isPending && deletingSlug === slug ? (
                      "..."
                    ) : (
                      <FaTrash size={18} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
