import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import RecentBlogs from "@/components/RecentBlogs";
import RecentProjects from "@/components/RecentProjects";
import TechSkills from "@/components/TechSkills";
import Navbar from "@/components/Navbar";
import React from "react";

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col items-center scroll-smooth bg-[#0F0F0F]">
      <Navbar currentPage="home" />
      <div className="w-full">
        {/* About Me Section */}
        <section className="w-full px-4 md:px-8">
          <AboutMe />
        </section>
        {/* Recent Projects Section */}
        <section className="w-full px-4 md:px-8">
          <RecentProjects />
        </section>
        {/* Tech Skills Section */}
        <section className="w-full px-4 md:px-8">
          <TechSkills />
        </section>
        {/* Recent Blogs Section */}
        <section className="w-full px-4 md:px-8">
          <RecentBlogs />
        </section>
        {/* Contact Me Section */}
        <section id="contact-me" className="w-full px-4 md:px-8">
          <ContactMe />
        </section>
      </div>
    </main>
  );
};

export default Home;
