import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { auth } from "@/auth";

const prisma = new PrismaClient();
const ALLOWED_GITHUB_ID = process.env.ALLOWED_GITHUB_ID;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await auth(req, res);
  const { id } = req.query;

  if (!id || typeof id !== "string") {
    return res.status(400).json({ error: "Invalid post ID" });
  }

  if (req.method === "GET") {
    try {
      const post = await prisma.post.findUnique({ where: { id } });
      if (!post) return res.status(404).json({ error: "Post not found" });

      return res.status(200).json(post);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch post" });
    }
  }

  if (req.method === "PUT") {
    if (!session || String(session.user.id) !== String(ALLOWED_GITHUB_ID)) {
      return res.status(403).json({ error: "Forbidden: Only admin can update posts" });
    }

    const { title, content } = req.body;
    try {
      const updatedPost = await prisma.post.update({
        where: { id },
        data: { title, content },
      });

      return res.status(200).json(updatedPost);
    } catch (error) {
      return res.status(500).json({ error: "Failed to update post" });
    }
  }

  if (req.method === "DELETE") {
    if (!session || String(session.user.id) !== String(ALLOWED_GITHUB_ID)) {
      return res.status(403).json({ error: "Forbidden: Only admin can delete posts" });
    }

    try {
      await prisma.post.delete({ where: { id } });
      return res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Failed to delete post" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}