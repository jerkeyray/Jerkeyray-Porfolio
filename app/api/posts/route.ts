import { NextResponse } from "next/server";
import { auth } from "@/auth";
import prisma from "@/lib/prisma"; // Singleton Prisma instance

const ALLOWED_EMAIL = process.env.ALLOWED_EMAIL || "";

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.error("GET /posts error:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const session = await auth();
  console.log("Session Data:", session);

  if (!session || session.user?.email !== ALLOWED_EMAIL) {
    return NextResponse.json(
      { error: "Forbidden: Only the admin can create posts" },
      { status: 403 }
    );
  }

  try {
    const { title, content } = await request.json();
    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    const newPost = await prisma.post.create({
      data: { title, content, slug },
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error("POST /posts error:", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}