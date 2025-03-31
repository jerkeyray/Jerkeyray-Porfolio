import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      animation: {
        spin: "spin 1s linear infinite",
        "spin-reverse": "spin 1.5s linear infinite reverse",
      },
    },
  },
};

export default config;
