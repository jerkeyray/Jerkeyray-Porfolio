// components/ProjectsLinkCard.tsx
import Link from "next/link";

export default function ProjectsLinkCard() {
  return (
    <div className="flex-shrink-0 w-[90%] md:w-[85%] lg:w-[75%] xl:w-[70%] bg-[#121212] border-4 border-[#333333] rounded-md shadow-[8px_8px_0_#333333] overflow-hidden snap-center relative mx-auto p-6 md:h-[30rem] lg:h-[34rem] xl:h-[36rem]">
      {/* Outer Layer */}
      <div className="absolute inset-0 border-4 border-[#333333] rounded-md -z-10"></div>
      {/* Second Layer */}
      <div className="absolute inset-2 border-4 border-[#333333] rounded-md -z-20"></div>
      {/* Content */}
      <div className="relative w-full h-full flex flex-col items-center justify-center px-4">
        <h3 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white text-center leading-tight">
          Discover more of my work
        </h3>
        <div className="mt-8">
          <Link href="/projects">
            <button className="px-8 py-4 md:px-10 md:py-5 bg-[#1A1A1A] text-[#FFFFFF] text-base md:text-xl font-bold rounded-md border-4 border-[#333333] shadow-[6px_6px_0_#333333] hover:bg-[#0077FF] hover:text-[#FFFFFF] hover:shadow-[6px_6px_0_#0056B3] transition-all relative z-20">
              Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
