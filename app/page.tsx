import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import RecentBlogs from "@/components/RecentBlogs";
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
      <section>
        <RecentBlogs />
      </section>
      <section>
        <ContactMe />
      </section>
    </main>
  );
};

export default Home;
