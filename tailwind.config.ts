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
  primary: "#0078D4", // Blue (aligned to MS blue) - SQLOPTIMISE brand primary
  primaryDark: "#006CBE", // Darker blue for button gradients
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
      borderRadius: {
        'md': '0.5rem', // Enhanced medium radius for elevated cards
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lift': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
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
