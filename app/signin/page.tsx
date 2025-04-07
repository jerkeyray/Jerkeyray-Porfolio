"use client";

import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0F0F0F] text-white">
      <div className="relative p-8 bg-[#1A1A1A] border-4 border-[#333333] rounded-md shadow-[8px_8px_0_#333333] overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
            backgroundSize: "8px 8px",
          }}
        />
        <h1 className="text-2xl font-bold mb-8 relative z-10 text-center">
          Admin Sign-In
        </h1>
        <button
          className="px-6 py-3 bg-[#232323] text-white rounded-md border-4 border-[#333333] shadow-[4px_4px_0_#333333] hover:bg-[#0077FF] hover:text-white hover:shadow-[4px_4px_0_#0056B3] transition-all relative z-10 font-bold"
          onClick={() => signIn("github")}
        >
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
}
