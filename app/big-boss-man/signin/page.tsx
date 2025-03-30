import SignIn from "@/components/SignIn";
import React from "react";

const page = async () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F0F0F] px-4">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative w-full max-w-md">
        <div className="relative bg-[#0F0F0F] border-4 border-[#FFFFFF] rounded-md shadow-[8px_8px_0_#FFFFFF] p-8">
          <h3 className="text-3xl font-bold text-center mb-8 text-[#FFFFFF]">
            Welcome Big Boss Man
          </h3>
          <div className="transform hover:scale-[1.01] transition-transform duration-200">
            <SignIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
