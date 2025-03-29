// components/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { techIcons } from "@/lib/techIcons";

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
    <div className="flex-shrink-0 w-[95%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-[#FFFFFF] border-4 border-[#0F0F0F] rounded-md shadow-[8px_8px_0_#0F0F0F] overflow-hidden snap-center mx-auto md:h-[28rem] lg:h-[32rem]">
      {/* Image Container with Aspect Ratio */}
      <div className="relative w-full aspect-video">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-md" // Ensures the image covers the area without distortion
        />
      </div>
      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <Link href={liveUrl || "#"} target="_blank">
            <h3 className="text-3xl font-bold text-black hover:text-blue-600 transition-colors">
              {title}
            </h3>
          </Link>
          {githubUrl && (
            <Link href={githubUrl} target="_blank">
              <FaGithub className="text-black hover:text-blue-600 text-3xl transition-colors" />
            </Link>
          )}
        </div>
        <p className="text-gray-600 text-lg">{description}</p>
        <div className="flex flex-wrap gap-4">
          {tech.map((techItem, i) => {
            const Icon = techIcons[techItem] || null;
            return (
              <div key={i} className="flex items-center gap-2">
                {Icon ? (
                  <Icon className="text-black text-2xl" />
                ) : (
                  <span className="text-lg text-gray-800 font-semibold">
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
