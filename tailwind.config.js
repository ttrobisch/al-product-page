/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        frontscreen:
          "linear-gradient(185deg, rgb(39, 45, 54) 0vh, rgb(39, 45, 54) 55vh, rgba(151, 185, 188, 0.2) calc(55vh + 1px), rgba(151, 185, 188, 0.5) 100%)",
        "frontscreen-big":
          "conic-gradient(from 275deg at 62vw 54vh, rgb(39, 45, 54), rgb(151, 185, 188), transparent)",
        line:
          "linear-gradient(90deg, transparent 0%, transparent 15%, rgba(0,0,0,0.2) calc(15% + 1px), rgba(0,0,0,0.2) 100%)",
      },
      backgroundColor: {
        darkblue: "rgb(65,77,86)",
      },
      textColor: {
        magenta: "rgb(232,3,129)",
      },
      colors: { magenta: "rgb(232,3,129)" },
    },
  },
  variants: {
    fill: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [
    require("@tailwindcss/container-queries"),
  ],
};
