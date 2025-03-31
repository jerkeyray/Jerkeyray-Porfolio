import React from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import PageHeader from "@/components/PageHeader";

const ProjectsPage = () => {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto">
        <PageHeader title="Projects" subtitle="Some things I've built" />
        <div className="px-4 md:px-6 lg:px-8 py-8 md:py-12 flex flex-col gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
