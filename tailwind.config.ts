import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        graphite: "var(--graphite)",
        "cinema-red": "var(--cinema-red)",
        "cinema-rec": "#e63946",
        "cinema-gold": "var(--cinema-gold)",
      },
      letterSpacing: {
        cinema: "0.35em",
      },
    },
  },
  plugins: [],
};
export default config;
