/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        foreground: "var(--text)",
        border: "var(--border)",
        accent: "var(--accent)",
      },
      fontFamily: {
        theme: "var(--font)",
      },
    },
  },
  plugins: [],
};

export default config;
