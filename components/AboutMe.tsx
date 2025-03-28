import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center py-6 ">
      {/* Profile Image */}
      <div className="w-40 h-40 md:w-48 md:h-48 bg-[#FFFFFF] border-4 border-[#0F0F0F] rounded-full shadow-[8px_8px_0_#0F0F0F] overflow-hidden flex-shrink-0">
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Manga Panel */}
      <div className="relative w-full max-w-2xl mx-4 p-8 bg-[#FFFFFF] text-[#0F0F0F] border-4 border-[#0F0F0F] rounded-md shadow-[8px_8px_0_#0F0F0F] transform -rotate-2 overflow-hidden mt-8 md:mt-0 md:ml-8">
        {/* Subtle Screentone Background */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#0F0F0F 1px, transparent 1px)`,
            backgroundSize: "8px 8px",
          }}
        />
        {/* Title */}
        <h1 className="relative text-4xl md:text-5xl font-bold mb-6 animate-fade-in text-center z-10">
          Hi, I’m Aditya Srivastava
        </h1>
        {/* Description */}
        <p className="relative text-lg md:text-xl max-w-lg text-center leading-relaxed whitespace-pre-line z-10">
          A CS undergrad with a passion for creating engaging user experiences
          and solving complex problems. I love combining creativity with
          technology to bring ideas to life.
        </p>
        {/* Speech Bubble */}
        <div className="relative mt-6 p-4 bg-[#F9F9F9] border-4 border-[#0F0F0F] rounded-md shadow-[6px_6px_0_#0F0F0F] text-center text-lg md:text-xl font-medium z-10">
          <p>"Turning coffee into code, one line at a time!"</p>
        </div>
        {/* Social Media Links */}
        <div className="relative mt-8 flex justify-center space-x-6 z-10">
          <a
            href="https://github.com/jerkeyrey"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0F0F0F] hover:text-[#0077FF] text-3xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/jerkeyrey"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0F0F0F] hover:text-[#0077FF] text-3xl"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-srivastava-a943a8321/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0F0F0F] hover:text-[#0077FF] text-3xl"
          >
            <FaLinkedin />
          </a>
        </div>
        {/* Contact Me Button */}
        <div className="relative mt-8 flex justify-center z-10">
          <a
            href="/contact-me"
            className="px-6 py-3 bg-[#FFFFFF] text-[#0F0F0F] text-lg font-bold rounded-md border-4 border-[#0F0F0F] shadow-[4px_4px_0_#0F0F0F] hover:bg-[#0077FF] hover:text-[#FFFFFF] hover:shadow-[4px_4px_0_#0056B3] transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
