export interface HashnodeArticle {
  id: string;
  title: string;
  slug: string;
  description: string;
  url: string;
  publishedAt: string;
  coverImage?: string;
  tags: string[];
  readable_publish_date: string;
}
