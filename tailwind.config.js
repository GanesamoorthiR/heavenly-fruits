/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#1F3A28",
          light: "#2E5138",
          dark: "#132218",
        },
        leaf: {
          DEFAULT: "#4C7A4A",
          light: "#6F9B65",
        },
        honey: {
          DEFAULT: "#D9A441",
          light: "#F0C77A",
          dark: "#B9862E",
        },
        cream: {
          DEFAULT: "#FBF6EC",
          dark: "#F3EAD6",
        },
        cocoa: {
          DEFAULT: "#4A2E22",
          light: "#6B4536",
        },
        charcoal: "#26261F",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["'Poppins'", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(31, 58, 40, 0.08)",
        card: "0 2px 12px rgba(31, 58, 40, 0.10)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
