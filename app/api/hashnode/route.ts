import { NextResponse } from "next/server";

const HASHNODE_GRAPHQL_URL = "https://gql.hashnode.com/";

interface HashnodeTag {
  name: string;
}

interface HashnodePost {
  id: string;
  title: string;
  slug: string;
  brief: string;
  url: string;
  publishedAt: string;
  coverImage?: {
    url: string;
  };
  tags?: HashnodeTag[];
}

interface HashnodeEdge {
  node: HashnodePost;
}

const query = `
  query GetPublication($host: String!) {
    publication(host: $host) {
      posts(first: 10) {
        edges {
          node {
            id
            title
            slug
            brief
            url
            publishedAt
            coverImage {
              url
            }
            tags {
              name
            }
          }
        }
      }
    }
  }
`;

export async function GET() {
  try {
    const response = await fetch(HASHNODE_GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Do not cache the upstream response on the server runtime
      cache: "no-store",
      body: JSON.stringify({
        query,
        variables: { host: "jerkeyray.hashnode.dev" },
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.status}`);
    }

    const result = await response.json();

    if (result.errors) {
      throw new Error(`GraphQL errors: ${JSON.stringify(result.errors)}`);
    }

    const posts =
      result.data?.publication?.posts?.edges?.map((edge: HashnodeEdge) => ({
        id: edge.node.id,
        title: edge.node.title,
        slug: edge.node.slug,
        description: edge.node.brief,
        url: edge.node.url,
        publishedAt: edge.node.publishedAt,
        coverImage: edge.node.coverImage?.url,
        tags: edge.node.tags?.map((tag: HashnodeTag) => tag.name) || [],
        readable_publish_date: new Date(
          edge.node.publishedAt
        ).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
      })) || [];

    // Prevent CDN / edge caching of this API response so recent posts appear immediately.
    return NextResponse.json(posts, {
      headers: {
        "Cache-Control": "no-store, max-age=0, s-maxage=0",
      },
    });
  } catch (error) {
    console.error("Error fetching Hashnode articles:", error);
    return NextResponse.json([], { status: 500 });
  }
}
