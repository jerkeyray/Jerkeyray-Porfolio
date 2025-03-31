import React from "react";
import Link from "next/link";

interface NavbarProps {
  currentPage?: "projects" | "blogs" | "home";
}

const Navbar = ({ currentPage = "home" }: NavbarProps) => {
  return (
    <nav className="w-full bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-end items-center h-12">
          <div className="flex space-x-6">
            {currentPage !== "home" && (
              <Link
                href="/"
                className="text-black hover:text-blue-600 text-xl font-medium transition-colors"
              >
                Home
              </Link>
            )}
            {currentPage !== "projects" && (
              <Link
                href="/projects"
                className="text-black hover:text-blue-600 text-xl font-medium transition-colors"
              >
                Projects
              </Link>
            )}
            {currentPage !== "blogs" && (
              <Link
                href="/blogs"
                className="text-black hover:text-blue-600 text-xl font-medium transition-colors"
              >
                Blogs
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
