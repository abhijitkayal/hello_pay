import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["InterVariable", "sans-serif"],
      },
      colors: {
        primary: "#2563eb",
        softBlue: "#eaf2ff",
        glass: "rgba(255,255,255,0.65)",
      },
      boxShadow: {
        glass: "0 20px 40px rgba(0,0,0,0.08)",
      },
      backdropBlur: {
        glass: "20px",
      },
    },
  },
  plugins: [],
};

export default config;
