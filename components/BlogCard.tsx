import Link from "next/link";
import { DevToArticle } from "@/lib/devto";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  createdAt: string;
}

interface BlogCardProps {
  post?: BlogPost;
  article?: DevToArticle;
  variant?: "default" | "compact" | "featured" | "enlargeable";
}

const BlogCard = ({ post, article, variant = "default" }: BlogCardProps) => {
  // Determine which data source to use
  const isDevToArticle = !!article;
  const title = isDevToArticle ? article!.title : post!.title;
  const date = isDevToArticle ? article!.published_at : post!.createdAt;
  const content = isDevToArticle ? article!.description : post!.content;
  const href = isDevToArticle ? article!.url : `/blogs/${post!.slug}`;

  // Format date
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  // Generate variant-specific classes
  const getVariantClasses = () => {
    switch (variant) {
      case "compact":
        return {
          article:
            "bg-black border border-[#333333] rounded-md shadow-[2px_2px_0_#333333] hover:shadow-[3px_3px_0_#333333]",
          content: "p-3",
          title: "text-sm font-medium mb-1",
          date: "text-xs",
        };
      case "featured":
        return {
          article:
            "bg-black border-2 border-[#444444] rounded-lg shadow-[5px_5px_0_#444444] hover:shadow-[7px_7px_0_#444444]",
          content: "p-5 sm:p-6",
          title: "text-xl sm:text-2xl font-bold mb-3 sm:mb-4",
          date: "text-sm",
        };
      case "enlargeable":
        return {
          article:
            "bg-black border-2 border-[#333333] rounded-lg shadow-[3px_3px_0_#333333] sm:shadow-[4px_4px_0_#333333] hover:scale-[1.02]",
          content: "p-4 sm:p-5",
          title: "text-lg sm:text-xl font-bold mb-2 sm:mb-3",
          date: "text-xs sm:text-sm",
        };
      default:
        return {
          article:
            "bg-black border-2 border-[#333333] rounded-lg shadow-[3px_3px_0_#333333] sm:shadow-[4px_4px_0_#333333] hover:shadow-[5px_5px_0_#333333] sm:hover:shadow-[6px_6px_0_#333333]",
          content: "p-4 sm:p-5",
          title: "text-lg sm:text-xl font-bold mb-2 sm:mb-3",
          date: "text-xs sm:text-sm",
        };
    }
  };

  const variantClasses = getVariantClasses();

  return (
    <Link
      href={href}
      className="block w-full"
      {...(isDevToArticle
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      <article
        className={`relative w-full ${variantClasses.article} overflow-hidden transition-all duration-300`}
      >
        {/* Dotted Pattern */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
            backgroundSize: "8px 8px",
          }}
        />

        <div className={`relative z-10 ${variantClasses.content}`}>
          {/* Title */}
          <h3 className={`${variantClasses.title} text-white tracking-tight`}>
            {title}
          </h3>

          {/* Date */}
          <div
            className={`flex items-center text-gray-400 ${variantClasses.date}`}
          >
            <span>{formattedDate}</span>
            {isDevToArticle && (
              <span className="ml-2 text-xs bg-blue-600 text-white px-2 py-1 rounded">
                dev.to
              </span>
            )}
          </div>

          {/* Display a content preview only for featured variant */}
          {variant === "featured" && (
            <p className="text-gray-300 mt-2 line-clamp-2">
              {content.substring(0, 120)}...
            </p>
          )}
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
