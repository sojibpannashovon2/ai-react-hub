/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#38BDF8",

          "secondary": "#818CF8",

          "accent": "#F471B5",

          "neutral": "#1E293B",

          "base-100": "#0F172A",

          "info": "#0CA5E9",

          "success": "#2DD4BF",

          "warning": "#F4BF50",

          "error": "#FB7085",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}