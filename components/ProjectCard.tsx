// components/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { techIcons } from "@/lib/techIcons";
import DottedPattern from "./DottedPattern";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  // Check if URLs are valid (not undefined or empty)
  const hasLiveUrl = liveUrl && liveUrl.trim() !== "";
  const hasGithubUrl = githubUrl && githubUrl.trim() !== "";

  return (
    <div className="relative flex-shrink-0 w-[95%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-[#1A1A1A] border-4 border-[#333333] rounded-md shadow-[8px_8px_0_#333333] overflow-hidden snap-center mx-auto">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <DottedPattern />
      </div>
      <div className="relative w-full aspect-[16/9]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 95vw, (max-width: 1024px) 80vw, (max-width: 1280px) 70vw, 60vw"
        />
      </div>
      <div className="p-6 md:p-8 space-y-6">
        <div className="flex items-center justify-between">
          {hasLiveUrl ? (
            <Link
              href={liveUrl}
              target="_blank"
              className="transition-transform hover:scale-105  pointer-events-auto"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white hover:text-blue-400 transition-colors">
                {title}
              </h3>
            </Link>
          ) : (
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {title}
            </h3>
          )}
          {hasGithubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              className="inline-block p-2 transition-all hover:scale-110  pointer-events-auto"
            >
              <FaGithub className="text-white hover:text-blue-400 text-2xl md:text-3xl transition-colors" />
            </Link>
          )}
        </div>
        <p className="text-gray-300 text-base md:text-lg">{description}</p>
        <div className="flex flex-wrap gap-3 md:gap-4 pt-2">
          {tech.map((techItem, i) => {
            const Icon = techIcons[techItem] || null;
            return (
              <div key={i} className="flex items-center gap-2">
                {Icon ? (
                  <Icon className="text-gray-200 text-xl md:text-2xl" />
                ) : (
                  <span className="text-base md:text-lg text-gray-300 font-semibold">
                    {techItem}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
