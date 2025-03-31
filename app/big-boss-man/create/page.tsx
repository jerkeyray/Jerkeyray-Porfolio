"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreatePost() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [saving, setSaving] = useState(false);

  const handleCreate = async () => {
    if (!title.trim() || !content.trim()) {
      alert("Title and content cannot be empty.");
      return;
    }

    setSaving(true);
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    if (res.ok) {
      router.push("/big-boss-man");
    } else {
      console.error("Failed to create post");
      alert("Error creating post.");
    }
    setSaving(false);
  };

  return (
    <div className="min-h-screen w-full bg-gray-900">
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold">Create New Post</h1>
        <input
          className="w-full p-2 border border-gray-700 rounded mt-4"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full p-2 border border-gray-700 rounded mt-4 h-40"
          placeholder="Enter content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded mt-4"
          onClick={handleCreate}
          disabled={saving}
        >
          {saving ? "Creating..." : "Create Post"}
        </button>
      </div>
    </div>
  );
}
