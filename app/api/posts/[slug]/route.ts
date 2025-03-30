import { NextResponse } from "next/server";
import { auth } from "@/auth";
import prisma from "@/lib/prisma"; // Use a singleton Prisma instance

const ALLOWED_EMAIL = process.env.ALLOWED_EMAIL || "";

export async function GET(
  _: Request,
  context: { params: { slug: string } } // ❌ FIXED: `params` is not a Promise
) {
  try {
    const post = await prisma.post.findUnique({
      where: { slug: context.params.slug },
    });

    if (!post)
      return NextResponse.json({ error: "Post not found" }, { status: 404 });

    return NextResponse.json(post);
  } catch (error) {
    console.error("GET /post error:", error);
    return NextResponse.json(
      { error: "Failed to fetch post" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  context: { params: { slug: string } } // ❌ FIXED: `params` is not a Promise
) {
  const session = await auth();

  if (!session || session.user?.email !== ALLOWED_EMAIL) {
    return NextResponse.json(
      { error: "Forbidden: Only admin can update posts" },
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

    const updatedPost = await prisma.post.update({
      where: { slug: context.params.slug },
      data: { title, content },
    });

    return NextResponse.json(updatedPost);
  } catch (error) {
    console.error("PUT /post error:", error);
    return NextResponse.json(
      { error: "Failed to update post" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _: Request,
  context: { params: { slug: string } } // ❌ FIXED: `params` is not a Promise
) {
  const session = await auth();

  if (!session || session.user?.email !== ALLOWED_EMAIL) {
    return NextResponse.json(
      { error: "Forbidden: Only admin can delete posts" },
      { status: 403 }
    );
  }

  try {
    await prisma.post.delete({ where: { slug: context.params.slug } });
    return NextResponse.json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("DELETE /post error:", error);
    return NextResponse.json(
      { error: "Failed to delete post" },
      { status: 500 }
    );
  }
}