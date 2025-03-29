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
    <section className="min-h-screen flex flex-col items-center justify-center py-12 bg-[#FFFFFF] px-4 md:px-8">
      {/* Title */}
      <div className="relative w-full max-w-2xl mx-auto p-8 bg-[#FFFFFF] text-[#0F0F0F] border-4 border-[#0F0F0F] rounded-md shadow-[8px_8px_0_#0F0F0F] overflow-hidden mb-8">
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
              <CarouselItem
                key={index}
                className="basis-full flex justify-center items-center"
              >
                <div className="w-[90%] md:w-[75%] lg:w-[65%] xl:w-[60%] h-auto">
                  {/* Maintain aspect ratio using aspect-video */}
                  <ProjectCard {...project} />
                </div>
              </CarouselItem>
            ))}
            <CarouselItem className="basis-full flex justify-center items-center">
              <div className="w-[90%] md:w-[75%] lg:w-[65%] xl:w-[60%] h-auto">
                {/* Maintain aspect ratio using aspect-video */}
                <ProjectsLinkCard />
              </div>
            </CarouselItem>
          </CarouselContent>
          {/* Hide buttons on mobile */}
          <CarouselPrevious className="hidden md:flex absolute left-8 top-1/2 transform -translate-y-1/2 bg-[#FFFFFF] text-[#0F0F0F] border-4 border-[#0F0F0F] rounded-full shadow-[6px_6px_0_#0F0F0F] p-4 text-2xl hover:bg-[#0077FF] hover:text-[#FFFFFF] hover:shadow-[6px_6px_0_#0056B3] transition-all">
            ←
          </CarouselPrevious>
          <CarouselNext className="hidden md:flex absolute right-8 top-1/2 transform -translate-y-1/2 bg-[#FFFFFF] text-[#0F0F0F] border-4 border-[#0F0F0F] rounded-full shadow-[6px_6px_0_#0F0F0F] p-4 text-2xl hover:bg-[#0077FF] hover:text-[#FFFFFF] hover:shadow-[6px_6px_0_#0056B3] transition-all">
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
