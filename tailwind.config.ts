import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F172A",
          50: "#F1F5F9",
          100: "#E2E8F0",
          400: "#334155",
          500: "#1E293B",
          600: "#172033",
          900: "#0F172A",
          950: "#080D1A",
        },
        sky: {
          DEFAULT: "#3B82F6",
          50: "#EFF6FF",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
        },
        emerald: {
          DEFAULT: "#10B981",
          50: "#ECFDF5",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
        },
        cloud: "#F8FAFC",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(15,23,42,0.0), rgba(15,23,42,0.9))",
      },
      boxShadow: {
        premium:
          "0 20px 60px -15px rgba(15, 23, 42, 0.25), 0 8px 20px -8px rgba(15, 23, 42, 0.15)",
        glow: "0 0 0 1px rgba(59,130,246,0.15), 0 20px 40px -12px rgba(59,130,246,0.35)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "fade-in": "fade-in 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
