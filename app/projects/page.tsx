import React from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import Navbar from "@/components/Navbar";

export default function ProjectsPage() {
  return (
    <section className="min-h-screen flex flex-col items-start justify-start py-20 bg-black px-4 md:px-16">
      <div className="w-full max-w-2xl mx-auto mb-10">
        {/* Projects Section */}
        <div className="text-white space-y-8 pl-2">
          <div className="flex items-center space-x-2 text-[#0077FF]">
            <span className="text-4xl font-bold font-mono">&gt;</span>
            <h2 className="text-4xl font-medium tracking-wide text-white">
              my projects
            </h2>
          </div>

          <div className="space-y-10 pt-2">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
      <Navbar />
    </section>
  );
}
