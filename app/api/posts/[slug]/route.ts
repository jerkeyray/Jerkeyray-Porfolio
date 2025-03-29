import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { auth } from "@/auth";

const prisma = new PrismaClient();
const ALLOWED_GITHUB_ID = process.env.ALLOWED_GITHUB_ID;

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const post = await prisma.post.findUnique({
      where: { slug: params.slug },
    });

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error("Error fetching post:", error);
    return NextResponse.json(
      { error: "Failed to fetch post" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const session = await auth();
  if (!session || session.user.id !== ALLOWED_GITHUB_ID) {
    return NextResponse.json(
      { error: "Forbidden: Only admin can update posts" },
      { status: 403 }
    );
  }

  try {
    const { title, content } = await request.json();
    const updatedPost = await prisma.post.update({
      where: { slug: params.slug },
      data: { title, content },
    });
    return NextResponse.json(updatedPost);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update post" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const session = await auth();
  if (!session || session.user.id !== ALLOWED_GITHUB_ID) {
    return NextResponse.json(
      { error: "Forbidden: Only admin can delete posts" },
      { status: 403 }
    );
  }

  try {
    await prisma.post.delete({
      where: { slug: params.slug },
    });
    return NextResponse.json({ message: "Post deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete post" },
      { status: 500 }
    );
  }
}
