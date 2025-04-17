import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      animation: {
        spin: "spin 1s linear infinite",
        "spin-reverse": "spin 1.5s linear infinite reverse",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        // Removed the heading font family since we're using Inter for everything
      },
    },
  },
};

export default config;
