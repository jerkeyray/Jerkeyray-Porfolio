import AboutMe from "@/components/AboutMe";
import RecentProjects from "@/components/RecentProjects";
import TechSkills from "@/components/TechSkills";
import React from "react";

const Home = () => {
  return (
    <main className="flex flex-col items-center scroll-smooth bg-[#FFFFFF]">
      {" "}
      {/* Ensure consistent white background */}
      {/* About Me Section */}
      <section className="w-full">
        <AboutMe />
      </section>
      {/* Recent Projects Section */}
      <section className="w-full">
        <RecentProjects />
      </section>
      <TechSkills />
    </main>
  );
};

export default Home;
