/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"] ,
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",
        "accent-dark": "var(--accent2)",
        surface: "var(--surface)",
        surface2: "var(--surface2)",
        border: "var(--border)",
        text: "var(--text)",
        muted: "var(--muted)",
      },
      boxShadow: {
        soft: "0 20px 50px -30px rgba(0, 0, 0, 0.35)",
      },
    },
  },
  plugins: [],
};
