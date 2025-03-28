// components/ProjectsLinkCard.tsx
import Link from "next/link";

export default function ProjectsLinkCard() {
  return (
    <div className="flex-shrink-0 w-[90%] md:w-[70%] lg:w-[60%] bg-[#000000] border-4 border-[#FFFFFF] border-t-[#0F0F0F] border-l-[#0F0F0F] rounded-md shadow-[8px_8px_0_#0F0F0F] overflow-hidden snap-center relative mx-auto p-4">
      {/* Outer Layer */}
      <div className="absolute inset-0 border-4 border-[#FFFFFF] border-t-[#0F0F0F] border-l-[#0F0F0F] rounded-md -z-10"></div>
      {/* Second Layer */}
      <div className="absolute inset-2 border-4 border-[#0F0F0F] border-t-[#FFFFFF] border-l-[#FFFFFF] rounded-md -z-20"></div>
      {/* Content */}
      <div className="relative w-full h-96 flex flex-col items-center justify-center">
        <h3 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white text-center leading-tight">
          Discover more of my work
        </h3>
        <div className="mt-8">
          <Link href="/projects">
            <button className="bg-[#FFFFFF] text-[#000000] px-6 py-3 text-xl font-bold rounded-md border-4 border-[#0F0F0F] shadow-[4px_4px_0_#0F0F0F] hover:bg-[#F3F3F3] hover:shadow-[6px_6px_0_#0C0C0C] hover:scale-105 transition-transform duration-200 ease-in-out">
              Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
