"use client";
import { useState } from "react";

export default function ContactMe() {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <section className="py-12 flex flex-col items-center justify-center px-4 md:px-8">
      {/* Compact Contact Me Container */}
      <div className="relative w-full max-w-3xl mx-auto p-12 bg-[#1A1A1A] text-[#FFFFFF] border-4 border-[#333333] rounded-md shadow-[8px_8px_0_#333333] overflow-hidden flex flex-col items-center">
        {/* Dotted Pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
            backgroundSize: "8px 8px",
          }}
        />
        <h2 className="text-6xl md:text-7xl font-bold leading-tight z-10 text-center mb-8">
          Contact <br /> Me Here
        </h2>
        {/* Centered Button */}
        <button
          onClick={() => setShowEmail(!showEmail)}
          className="px-10 py-5 bg-[#232323] text-[#FFFFFF] text-lg md:text-xl font-bold rounded-md border-4 border-[#333333] shadow-[6px_6px_0_#333333] hover:bg-[#0077FF] hover:text-[#FFFFFF] hover:shadow-[6px_6px_0_#0056B3] transition-all relative z-20"
        >
          {showEmail ? "srivastavya24@gmail.com" : "Email"}
        </button>
      </div>
    </section>
  );
}
