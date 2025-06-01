import { NextResponse } from "next/server";
import { config } from "@/lib/config";

export async function GET() {
  try {
    const response = await fetch(
      `https://dev.to/api/articles?username=${config.devTo.username}`,
      {
        headers: {
          "User-Agent": "Portfolio-App",
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.status}`);
    }

    const articles = await response.json();
    return NextResponse.json(articles);
  } catch (error) {
    console.error("Error fetching dev.to articles:", error);
    return NextResponse.json([], { status: 500 });
  }
}
