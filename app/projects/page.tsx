import React from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import Navbar from "@/components/Navbar";

export default function ProjectsPage() {
  return (
    <div className="bg-[#0F0F0F] min-h-screen">
      <Navbar currentPage="projects" />
      <section className="py-12 flex flex-col items-center px-4 md:px-8">
        <div className="relative w-full max-w-2xl mx-auto p-8 bg-[#1A1A1A] text-[#FFFFFF] border-4 border-[#333333] rounded-md shadow-[8px_8px_0_#333333] overflow-hidden mb-12">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
              backgroundSize: "8px 8px",
            }}
          />
          <h1 className="relative text-4xl md:text-5xl font-bold text-center z-10">
            Projects
          </h1>
        </div>
        <div className="w-full max-w-4xl space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
