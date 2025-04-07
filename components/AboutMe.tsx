"use client"; // Mark this as a client component
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const AboutMe = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact-me");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center py-6 md:py-20 md:pb-56 bg-[#0F0F0F] px-4 md:px-8">
      {/* Profile Image */}
      <div className="w-40 h-40 md:w-48 md:h-48 bg-[#1A1A1A] border-4 border-[#333333] rounded-full shadow-[8px_8px_0_#333333] overflow-hidden flex-shrink-0">
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Manga Panel */}
      <div className="relative w-full max-w-2xl mx-4 p-8 bg-[#1A1A1A] text-[#FFFFFF] border-4 border-[#333333] rounded-md shadow-[8px_8px_0_#333333] transform -rotate-2 overflow-hidden mt-8 md:mt-0 md:ml-8">
        {/* Subtle Screentone Background */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
            backgroundSize: "8px 8px",
          }}
        />
        {/* Title */}
        <h1 className="relative text-4xl md:text-5xl font-bold mb-6 animate-fade-in text-center z-10">
          Hi, I'm Aditya Srivastava
        </h1>
        {/* Description */}
        <p className="relative text-lg md:text-xl max-w-lg text-center leading-relaxed whitespace-pre-line z-10 text-gray-300">
          A CS undergrad who sees technology as a canvas. I fuse imagination
          with precision to create stunning, innovative systems that push
          boundaries.
        </p>
        {/* Speech Bubble */}
        <div className="relative mt-6 p-4 bg-[#232323] border-4 border-[#333333] rounded-md shadow-[6px_6px_0_#333333] text-center text-lg md:text-xl font-medium z-10">
          <p>&quot;Turning coffee into code, one line at a time!&quot;</p>
        </div>
        {/* Social Media Links */}
        <div className="relative mt-8 flex justify-center space-x-6 z-10">
          <a
            href="https://github.com/jerkeyrey"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFFFFF] hover:text-[#0077FF] text-3xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/jerkeyrey"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFFFFF] hover:text-[#0077FF] text-3xl"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-srivastava-a943a8321/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFFFFF] hover:text-[#0077FF] text-3xl"
          >
            <FaLinkedin />
          </a>
        </div>
        {/* Contact Me Button */}
        <div className="relative mt-8 flex justify-center z-10">
          <button
            onClick={handleScrollToContact}
            className="px-6 py-3 bg-[#1A1A1A] text-[#FFFFFF] text-lg font-bold rounded-md border-4 border-[#333333] shadow-[4px_4px_0_#333333] hover:bg-[#0077FF] hover:text-[#FFFFFF] hover:shadow-[4px_4px_0_#0056B3] transition-all"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
