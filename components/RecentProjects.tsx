// components/RecentProjects.tsx
"use client"; // Required for client-side interactivity with shadcn carousel

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import ProjectCard from "./ProjectCard";
import ProjectsLinkCard from "./ProjectsLinkCard";
import { projects } from "@/lib/projects";
import { useState, useEffect } from "react";

export default function RecentProjects() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    // Set initial index
    setCurrentIndex(api.selectedScrollSnap());

    // Listen for slide changes
    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-12 bg-[#F9F9F9]">
      {/* Title */}
      <div className="relative w-full max-w-2xl mx-4 p-8 bg-[#FFFFFF] text-[#0F0F0F] border-4 border-[#0F0F0F] rounded-md shadow-[8px_8px_0_#0F0F0F] transform -rotate-2 overflow-hidden mb-8">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#0F0F0F 1px, transparent 1px)`,
            backgroundSize: "8px 8px",
          }}
        />
        <h2 className="relative text-4xl md:text-5xl font-bold text-center z-10">
          Recent Projects
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-6xl px-4">
        <Carousel
          opts={{
            align: "center", // Center the active item
            loop: true, // Loops back to start
          }}
          setApi={setApi} // Hook into Embla API
          className="w-full"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="basis-full">
                <div className="p-4 flex justify-center">
                  <ProjectCard {...project} />
                </div>
              </CarouselItem>
            ))}
            <CarouselItem className="basis-full">
              <div className="p-4 flex justify-center items-center h-full">
                <ProjectsLinkCard />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#FFFFFF] text-[#0F0F0F] border-2 border-[#0F0F0F] rounded-full shadow-[4px_4px_0_#0F0F0F] p-4 text-2xl hover:bg-[#0077FF] hover:text-[#FFFFFF] transition-all">
            ←
          </CarouselPrevious>
          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#FFFFFF] text-[#0F0F0F] border-2 border-[#0F0F0F] rounded-full shadow-[4px_4px_0_#0F0F0F] p-4 text-2xl hover:bg-[#0077FF] hover:text-[#FFFFFF] transition-all">
            →
          </CarouselNext>
        </Carousel>
      </div>

      {/* Dashed Card Indicator */}
      <div className="mt-8 flex justify-center space-x-2">
        {[...projects, { isLinkCard: true }].map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 border-2 rounded-full ${
              currentIndex === index
                ? "bg-[#0F0F0F] border-[#0F0F0F]"
                : "border-dashed border-[#0F0F0F]"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}