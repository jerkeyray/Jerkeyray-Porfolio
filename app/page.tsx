import AboutMe from "@/components/AboutMe";
import Navbar from "@/components/Navbar";
import React from "react";

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col items-center scroll-smooth bg-transparent overflow-hidden">
      <Navbar />
      <div className="w-full flex justify-center items-center flex-1">
        {/* About Me Section */}
        <section className="w-full px-4 md:px-8 flex justify-center">
          <AboutMe />
        </section>
      </div>
    </main>
  );
};

export default Home;
