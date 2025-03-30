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
    <div className="max-w-3xl mx-auto space-y-4 p-6">

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <Link href="/big-boss-man/create">
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            + New Post
          </button>
        </Link>
      </div>
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <div className="space-y-4">
          {posts.map(({ id, title, slug, createdAt }) => (
            <div key={id} className="border border-white/20 p-4 rounded">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-bold">{title}</h2>
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
                    <button className="p-2 hover:text-blue-400">
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
