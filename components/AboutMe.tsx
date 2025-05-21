"use client"; // Mark this as a client component
import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaServer,
  FaCog,
  FaDev,
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
    <section className="flex flex-col items-start justify-start py-4 sm:py-6 px-3 sm:px-4 md:px-8 bg-transparent">
      {/* Header Section with Photo and Name */}
      <div className="w-full max-w-2xl mx-auto">
        <div className="relative w-full p-4 sm:p-5 bg-black text-[#FFFFFF] border-2 border-[#333333] rounded-lg shadow-[4px_4px_0_#333333] sm:shadow-[6px_6px_0_#333333] overflow-hidden mb-6 sm:mb-10">
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
              backgroundSize: "8px 8px",
            }}
          />
          <div className="flex items-center gap-3 sm:gap-5">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black border-2 border-[#333333] rounded-full overflow-hidden flex-shrink-0 hover:border-[#0077FF] transition-colors duration-300">
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold mb-0.5 tracking-tight">
                Aditya Srivastava
              </h1>
              <p className="text-gray-400 text-xs sm:text-sm font-medium">
                @jerkeyray
              </p>
            </div>
          </div>
        </div>

        {/* About Text Section */}
        <div className="text-white space-y-6 sm:space-y-8 pl-1 sm:pl-2">
          <div className="flex items-center space-x-2 text-[#0077FF]">
            <span className="text-xl sm:text-2xl font-bold font-mono">
              &gt;
            </span>
            <h2 className="text-lg sm:text-xl font-medium tracking-wide text-white">
              about me
            </h2>
          </div>

          <div className="text-gray-300 text-base sm:text-lg pl-4 sm:pl-6 space-y-2 sm:space-y-3 leading-relaxed">
            <p className="transition-colors duration-200 hover:text-white">
              hi, i am aditya
            </p>
            <p className="transition-colors duration-200 hover:text-white">
              17 y/o cs student, currently studying at vellore institute of
              technology
            </p>
            <p className="transition-colors duration-200 hover:text-white">
              i like to break things and fix them back while im at it
            </p>
            <p className="transition-colors duration-200 hover:text-white">
              currently working on web development and backend technologies
            </p>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 pl-4 sm:pl-6">
            <div className="flex items-center bg-[#1F1F1F] px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-[#2A2A2A] transition-colors duration-300">
              <FaCode className="mr-2 text-[#0077FF]" />
              <span className="text-gray-200 text-sm">Web Dev</span>
            </div>
            <div className="flex items-center bg-[#1F1F1F] px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-[#2A2A2A] transition-colors duration-300">
              <FaServer className="mr-2 text-[#0077FF]" />
              <span className="text-gray-200 text-sm">Backend Systems</span>
            </div>
          </div>

          {/* Social Icons Section */}
          <div className="flex items-center space-x-5 sm:space-x-6 pl-4 sm:pl-6 pt-3 sm:pt-4">
            <a
              href="https://github.com/jerkeyray"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0077FF] text-xl sm:text-2xl transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/jerkeyray"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0077FF] text-xl sm:text-2xl transition-all duration-300 transform hover:scale-110"
              aria-label="Twitter/X Profile"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-srivastava-a943a8321/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0077FF] text-xl sm:text-2xl transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://dev.to/jerkeyray"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0077FF] text-xl sm:text-2xl transition-all duration-300 transform hover:scale-110"
              aria-label="Dev.to Blog"
            >
              <FaDev />
            </a>
            <button
              onClick={copyEmailToClipboard}
              className="text-gray-400 hover:text-[#0077FF] text-xl sm:text-2xl bg-transparent border-none p-0 cursor-pointer transition-all duration-300 transform hover:scale-110 relative"
              aria-label="Copy Email Address"
            >
              <FaEnvelope />
              {showCopied && (
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#1F1F1F] text-white text-xs py-1.5 px-3 rounded-md border border-[#333333] whitespace-nowrap shadow-lg">
                  Email copied!
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
