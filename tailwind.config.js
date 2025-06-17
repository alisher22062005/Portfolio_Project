/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "500px",
      xs: "320px", // Small devices (phones)
    },
  },
  plugins: [require("daisyui")], // ⬅️ Add this
};
