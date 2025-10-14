/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f9f5ff",
          100: "#efe7ff",
          300: "#7c3aed",
          500: "#6d28d9",
          600: "#5b21b6",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
