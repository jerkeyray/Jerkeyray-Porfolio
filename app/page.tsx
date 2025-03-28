import AboutMe from "@/components/AboutMe";
import RecentProjects from "@/components/RecentProjects";
import React from "react";

const Home = () => {
  return (
    <main className="flex flex-col items-center scroll-smooth">
      {" "}
      {/* Added scroll-smooth */}
      {/* About Me Section */}
      <section className="w-full">
        <AboutMe />
      </section>
      {/* Recent Projects Section */}
      <section className="w-full">
        <RecentProjects />
      </section>
    </main>
  );
};

export default Home;
