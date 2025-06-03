const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // Add this if using src folder
  ],
  theme: {
    extend: {},
  },
};
export default config;
