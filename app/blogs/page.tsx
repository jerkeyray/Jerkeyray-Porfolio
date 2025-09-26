"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";
import LoadingSpinner from "@/components/LoadingSpinner";
import { FaPen } from "react-icons/fa";
import { HashnodeArticle } from "@/lib/hashnode";

export default function BlogsPage() {
  const [articles, setArticles] = useState<HashnodeArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        console.log("🔄 Fetching articles from Hashnode API");
        const response = await fetch("/api/hashnode", {
          cache: "no-store", // Disable browser caching
        });
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }
        const data = await response.json();
        console.log("✅ Fetched articles:", data);
        console.log(`📊 Total articles received: ${data.length}`);
        setArticles(data);
      } catch (error) {
        console.error("❌ Failed to fetch articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <section className="min-h-screen flex flex-col items-start justify-start py-20 bg-black px-4 md:px-16">
      <div className="w-full max-w-2xl mx-auto mb-10">
        {/* Blogs Section */}
        <div className="text-white space-y-8 pl-2">
          <div className="flex items-center space-x-2 text-[#0077FF]">
            <span className="text-4xl font-bold font-mono">&gt;</span>
            <h2 className="text-4xl font-medium tracking-wide text-white">
              blog
            </h2>
          </div>

          <div className="space-y-6 pt-2">
            {articles.length > 0 ? (
              articles.map((article) => (
                <BlogCard
                  key={article.id}
                  article={article}
                  variant="default"
                />
              ))
            ) : (
              <div className="relative w-full bg-[#0D1117] border-2 border-[#21262D] rounded-lg shadow-[4px_4px_0_#21262D] overflow-hidden transition-all duration-300 hover:shadow-[6px_6px_0_#21262D] p-5">
                <div className="flex items-center justify-center py-8">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <FaPen className="text-4xl text-[#8B949E]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#C9D1D9] tracking-tight mb-2">
                      No Blog Posts Yet
                    </h3>
                    <p className="text-[#8B949E]">
                      Check back soon for new articles
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Navbar />
    </section>
  );
}
