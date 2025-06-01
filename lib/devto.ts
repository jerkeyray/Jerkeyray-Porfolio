export interface DevToArticle {
  id: number;
  title: string;
  description: string;
  url: string;
  published_at: string;
  cover_image: string;
  tag_list: string[];
  reading_time_minutes: number;
  slug: string;
}

export async function getDevToArticles(
  username: string
): Promise<DevToArticle[]> {
  try {
    const response = await fetch(
      `https://dev.to/api/articles?username=${username}`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch articles");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching dev.to articles:", error);
    return [];
  }
}
