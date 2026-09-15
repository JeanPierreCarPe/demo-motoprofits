import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        surface: "#1a1a1a",
        "surface-alt": "#232323",
        "surface-dark": "#231f20",
        foreground: "#fbfbfb",
        gold: {
          DEFAULT: "#e6a84e",
          to: "#ff6b35",
        },
        accent: {
          violet: "#8b5cf6",
          "violet-dark": "#4c1d95",
        },
      },
      fontFamily: {
        heading: ["var(--font-orbitron)", "sans-serif"],
        body: ["var(--font-space-grotesk)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(95deg, #e6a84e 0%, #ff6b35 100%)",
        "violet-gradient": "linear-gradient(135deg, #8b5cf6 0%, #4c1d95 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
