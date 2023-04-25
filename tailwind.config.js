/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,tsx}",
    "./node_modules/@heathmont/moon-core-tw/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        frontscreen:
          "linear-gradient(185deg, rgb(39, 45, 54) 0vh, rgb(39, 45, 54) 50vh, rgba(151, 185, 188, 0.2) calc(50vh + 1px), rgba(151, 185, 188, 0.5) 100%)",
        "frontscreen-big":
          "conic-gradient(from 275deg at 62vw 54vh, rgb(39, 45, 54), rgb(151, 185, 188), transparent)",
        line:
          "linear-gradient(90deg, transparent 0%, transparent 15%, rgba(0,0,0,0.2) calc(15% + 1px), rgba(0,0,0,0.2) 100%)",
      },
      backgroundColor: {
        blue: "rgb(39, 45, 54)",
      },
    },
  },
  plugins: [
    require("tailwindcss-rtl"),
    require("@tailwindcss/container-queries"),
  ],
  presets: [
    require("@heathmont/moon-core-tw/lib/private/presets/ds-moon-preset"),
  ],
};
