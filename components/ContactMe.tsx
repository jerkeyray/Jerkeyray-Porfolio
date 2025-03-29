"use client";
import { useState } from "react";

export default function ContactMe() {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <section className="py-12 flex flex-col items-center justify-center">
      {/* Compact Contact Me Container */}
      <div className="relative w-full max-w-3xl mx-6 p-12 bg-[#FFFFFF] text-[#0F0F0F] border-4 border-[#0F0F0F] rounded-md shadow-[8px_8px_0_#0F0F0F] overflow-hidden flex flex-col items-center">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#0F0F0F 1px, transparent 1px)`,
            backgroundSize: "8px 8px",
          }}
        />
        {/* Contact Me Text */}
        <h2 className="text-6xl md:text-7xl font-bold leading-tight z-10 text-center mb-8">
          Contact <br /> Me Here
        </h2>
        {/* Centered Button */}
        <button
          onClick={() => setShowEmail(!showEmail)}
          className="px-10 py-5 bg-[#FFFFFF] text-[#0F0F0F] text-lg md:text-xl font-bold rounded-md border-4 border-[#0F0F0F] shadow-[6px_6px_0_#0F0F0F] hover:bg-[#0077FF] hover:text-[#FFFFFF] hover:shadow-[6px_6px_0_#0056B3] transition-all"
        >
          {showEmail ? "srivastavya24@gmail.com" : "Email"}
        </button>
      </div>
    </section>
  );
}
