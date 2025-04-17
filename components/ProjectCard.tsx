// components/ProjectCard.tsx
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { techIcons } from "@/lib/techIcons";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string; // kept for backwards compatibility
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  liveUrl,
  githubUrl,
}: Omit<ProjectCardProps, "image">) {
  // Check if URLs are valid (not undefined or empty)
  const hasLiveUrl = liveUrl && liveUrl.trim() !== "";
  const hasGithubUrl = githubUrl && githubUrl.trim() !== "";

  return (
    <div className="relative w-full bg-black border-2 border-[#333333] rounded-lg shadow-[3px_3px_0_#333333] sm:shadow-[4px_4px_0_#333333] overflow-hidden transition-all duration-300 hover:shadow-[5px_5px_0_#333333] sm:hover:shadow-[6px_6px_0_#333333]">
      {/* Dotted Pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
          backgroundSize: "8px 8px",
        }}
      />

      {/* Project content */}
      <div className="relative z-10 p-4 sm:p-5 space-y-3 sm:space-y-4">
        {/* Title and Links */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            {title}
          </h3>
          <div className="flex space-x-3">
            {hasGithubUrl && (
              <Link
                href={githubUrl}
                target="_blank"
                className="text-gray-400 hover:text-[#0077FF] text-base sm:text-lg transition-all duration-300 transform hover:scale-110"
                aria-label={`GitHub repository for ${title}`}
              >
                <FaGithub />
              </Link>
            )}
            {hasLiveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                className="text-gray-400 hover:text-[#0077FF] text-base sm:text-lg transition-all duration-300 transform hover:scale-110"
                aria-label={`Live demo for ${title}`}
              >
                <FaExternalLinkAlt />
              </Link>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed transition-colors duration-200 hover:text-white">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tech.map((techItem, i) => {
            const Icon = techIcons[techItem] || null;
            return (
              <div
                key={i}
                className="flex items-center bg-[#1F1F1F] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg hover:bg-[#2A2A2A] transition-colors duration-300"
              >
                {Icon ? (
                  <Icon className={`text-[#0077FF] text-sm sm:mr-1.5`} />
                ) : (
                  <span className="text-gray-200 text-xs sm:hidden">
                    {techItem}
                  </span>
                )}
                <span className="text-gray-200 text-sm hidden sm:inline">
                  {techItem}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
