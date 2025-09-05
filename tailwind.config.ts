import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0EA5E9", // Sky blue - professional tech color
        secondary: "#1F2937", // Dark gray - professional
        accent: "#22C55E", // Green for success/performance gains
        background: {
          light: "#FFFFFF",
          dark: "#0B1220",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #0EA5E9 0%, #1F2937 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
