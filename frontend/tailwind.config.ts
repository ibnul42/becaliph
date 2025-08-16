import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f97316", // orange color for buttons and highlights
        secondary: "#0a3a57", // footer background
        accent: "#062b3d", // dark footer bottom
      },
    },
  },
  plugins: [],
};

export default config;
