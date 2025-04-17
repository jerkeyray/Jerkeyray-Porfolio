"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUser, FaCode, FaPen } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 pointer-events-none">
      {/* Gradient fade effect */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />

      {/* Navigation bar */}
      <div className="relative flex justify-center mb-6">
        <nav className="relative bg-[#1A1A1A] border border-[#333333] rounded-full px-5 py-3 shadow-lg pointer-events-auto">
          <div className="flex items-center">
            <Link
              href="/"
              className={`px-4 transition-colors duration-200 ${
                pathname === "/"
                  ? "text-[#0077FF]"
                  : "text-gray-400 hover:text-white"
              }`}
              aria-label="Home"
            >
              <FaUser className="text-xl" />
            </Link>

            <div className="text-gray-600 text-sm">|</div>

            <Link
              href="/projects"
              className={`px-4 transition-colors duration-200 ${
                pathname === "/projects"
                  ? "text-[#0077FF]"
                  : "text-gray-400 hover:text-white"
              }`}
              aria-label="Projects"
            >
              <FaCode className="text-xl" />
            </Link>

            <div className="text-gray-600 text-sm">|</div>

            <Link
              href="/blogs"
              className={`px-4 transition-colors duration-200 ${
                pathname === "/blogs"
                  ? "text-[#0077FF]"
                  : "text-gray-400 hover:text-white"
              }`}
              aria-label="Blogs"
            >
              <FaPen className="text-xl" />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
