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
  if (req.method === "GET") {
    try {
      const Posts = await prisma.post.findMany();
      return res.status(200).json(Posts);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch posts" });
    }
  }

  if (req.method === 'POST') {
    if (!session || session.user.id !== ALLOWED_GITHUB_ID) {
      return res.status(403).json({ error: 'Forbidden: Only the admin can create blogs' });
    }

    const { title, content } = req.body;
    try {
      const newPost = await prisma.post.create({ data: { title, content } });
      return res.status(201).json(newPost);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to create post' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
