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
        primary: "#E407F0", // Magenta - SQLOPTIMISE brand primary
        secondary: "#FAB700", // Gold/Yellow - SQLOPTIMISE brand secondary  
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
        "hero-gradient": "linear-gradient(135deg, #E407F0 0%, #FAB700 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
