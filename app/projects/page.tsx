import React from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import Navbar from "@/components/Navbar";

export default function ProjectsPage() {
  return (
    <>
      <Navbar currentPage="projects" />
      <section className="min-h-screen py-12 flex flex-col items-center px-4 md:px-8">
        <div className="relative w-full max-w-2xl mx-auto p-8 bg-[#FFFFFF] text-[#0F0F0F] border-4 border-[#0F0F0F] rounded-md shadow-[8px_8px_0_#0F0F0F] overflow-hidden mb-12">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#0F0F0F 1px, transparent 1px)`,
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
    </>
  );
}
