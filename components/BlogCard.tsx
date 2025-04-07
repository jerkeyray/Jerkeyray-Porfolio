import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  createdAt: string;
}

interface BlogCardProps {
  post: BlogPost;
  variant?: "default" | "compact" | "featured" | "enlargeable";
}

const BlogCard = ({ post, variant = "default" }: BlogCardProps) => {
  return (
    <Link href={`/blogs/${post.slug}`} className="block w-full">
      <article
        className={`
        relative bg-[#1A1A1A] text-white border-4 border-[#333333] rounded-md 
        px-8 py-6 md:px-12 md:py-8 shadow-[6px_6px_0_#333333] 
        ${
          variant === "enlargeable"
            ? "hover:scale-[1.02] hover:shadow-[12px_12px_0_#333333]"
            : "hover:shadow-[8px_8px_0_#333333]"
        }
        transition-all cursor-pointer w-full overflow-hidden
      `}
      >
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
            backgroundSize: "8px 8px",
          }}
        />
        <div className="relative flex justify-between items-center gap-8 z-10">
          <h2 className="font-bold truncate text-xl md:text-2xl lg:text-3xl">
            {post.title}
          </h2>
          <div className="text-gray-300 whitespace-nowrap text-sm md:text-base shrink-0">
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
