/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      rotate: {
        15: "15deg",
        30: "30deg",
        75: "75deg",
      },
      animation: {
        "hover-anim": "hovering 4s ease-in-out infinite alternate",
      },
      keyframes: {
        hovering: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(2rem)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
