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
    <section className="min-h-screen flex flex-col items-center justify-center py-12 bg-[#0F0F0F] px-4 md:px-8">
      {/* Title */}
      <div className="relative w-full max-w-2xl mx-auto p-8 bg-[#1A1A1A] text-[#FFFFFF] border-4 border-[#333333] rounded-md shadow-[8px_8px_0_#333333] overflow-hidden mb-8">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
            backgroundSize: "8px 8px",
          }}
        />
        <h2 className="relative text-4xl md:text-5xl font-bold text-center z-10">
          Recent Projects
        </h2>
      </div>
      {/* Carousel */}
      <div className="relative w-full max-w-6xl  md:px-12">
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
                <div className="w-[90%] md:w-[80%] lg:w-[75%] xl:w-[70%] h-auto">
                  {/* Maintain aspect ratio using aspect-video */}
                  <ProjectCard {...project} />
                </div>
              </CarouselItem>
            ))}
            <CarouselItem className="basis-full flex justify-center items-center">
              <div className="w-[90%] md:w-[80%] lg:w-[75%] xl:w-[70%] h-auto">
                {/* Maintain aspect ratio using aspect-video */}
                <ProjectsLinkCard />
              </div>
            </CarouselItem>
          </CarouselContent>
          {/* Hide buttons on mobile */}
          <CarouselPrevious className="hidden md:flex absolute -left-4 top-1/2 transform -translate-y-1/2 bg-[#1A1A1A] text-[#FFFFFF] border-4 border-[#333333] rounded-full shadow-[6px_6px_0_#333333] p-6 text-3xl hover:bg-[#232323] hover:text-[#0077FF] transition-all">
            ←
          </CarouselPrevious>
          <CarouselNext className="hidden md:flex absolute -right-4 top-1/2 transform -translate-y-1/2 bg-[#1A1A1A] text-[#FFFFFF] border-4 border-[#333333] rounded-full shadow-[6px_6px_0_#333333] p-6 text-3xl hover:bg-[#232323] hover:text-[#0077FF] transition-all">
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
                ? "bg-[#FFFFFF] border-[#FFFFFF]"
                : "border-dashed border-[#FFFFFF]"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
