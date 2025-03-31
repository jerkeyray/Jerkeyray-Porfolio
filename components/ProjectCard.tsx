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
  return (
    <div className="relative flex-shrink-0 w-[95%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-[#FFFFFF] border-4 border-[#0F0F0F] rounded-md shadow-[8px_8px_0_#0F0F0F] overflow-hidden snap-center mx-auto">
      <div className="absolute inset-0 opacity-5">
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
          <Link href={liveUrl || "#"} target="_blank">
            <h3 className="text-2xl md:text-3xl font-bold text-black hover:text-blue-600 transition-colors">
              {title}
            </h3>
          </Link>
          {githubUrl && (
            <Link href={githubUrl} target="_blank">
              <FaGithub className="text-black hover:text-blue-600 text-2xl md:text-3xl transition-colors" />
            </Link>
          )}
        </div>
        <p className="text-gray-600 text-base md:text-lg">{description}</p>
        <div className="flex flex-wrap gap-3 md:gap-4 pt-2">
          {tech.map((techItem, i) => {
            const Icon = techIcons[techItem] || null;
            return (
              <div key={i} className="flex items-center gap-2">
                {Icon ? (
                  <Icon className="text-black text-xl md:text-2xl" />
                ) : (
                  <span className="text-base md:text-lg text-gray-800 font-semibold">
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
