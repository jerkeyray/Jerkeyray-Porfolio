"use client"; // Mark this as a client component
import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaServer,
  FaCog,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const AboutMe = () => {
  const [showCopied, setShowCopied] = useState(false);

  const copyEmailToClipboard = () => {
    const email = "srivastavya24@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    });
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
      <div className="relative w-full max-w-2xl mx-4 p-8 bg-[#1A1A1A] text-[#FFFFFF] border-4 border-[#333333] rounded-md shadow-[8px_8px_0_#333333] overflow-hidden mt-8 md:mt-0 md:ml-8">
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
          Hi, I&apos;m Aditya Srivastava
        </h1>

        {/* Description - Improved formatting */}
        <div className="relative z-10 space-y-4 text-center">
          <p className="text-xl font-medium text-[#0077FF]">
            CS Undergraduate @ VIT Vellore
          </p>

          <p className="text-lg leading-relaxed text-gray-300">
            A passionate developer with a knack for creating elegant solutions
            to complex problems. I specialize in web development, complex
            backend systems, and low-level programming.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <div className="flex items-center bg-[#1F1F1F] px-3 py-1.5 rounded-md">
              <FaCode className="mr-2 text-[#0077FF]" />
              <span className="text-gray-200">Web Dev</span>
            </div>
            <div className="flex items-center bg-[#1F1F1F] px-3 py-1.5 rounded-md">
              <FaServer className="mr-2 text-[#0077FF]" />
              <span className="text-gray-200">Backend Systems</span>
            </div>
            <div className="flex items-center bg-[#1F1F1F] px-3 py-1.5 rounded-md">
              <FaCog className="mr-2 text-[#0077FF]" />
              <span className="text-gray-200">Low-level Systems</span>
            </div>
          </div>
        </div>

        {/* Social Media Links with Email Icon */}
        <div className="relative mt-8 flex justify-center space-x-6 z-10">
          <a
            href="https://github.com/jerkeyray"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFFFFF] hover:text-[#0077FF] text-3xl transform hover:scale-110 transition-all"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/jerkeyray"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFFFFF] hover:text-[#0077FF] text-3xl transform hover:scale-110 transition-all"
            aria-label="Twitter/X Profile"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-srivastava-a943a8321/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFFFFF] hover:text-[#0077FF] text-3xl transform hover:scale-110 transition-all"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <button
            onClick={copyEmailToClipboard}
            className="text-[#FFFFFF] hover:text-[#0077FF] text-3xl bg-transparent border-none p-0 cursor-pointer transform hover:scale-110 transition-all relative"
            aria-label="Copy Email Address"
          >
            <FaEnvelope />
            {showCopied && (
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                Email copied!
              </div>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
