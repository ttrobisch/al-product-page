/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,tsx}",
    "./node_modules/@heathmont/moon-core-tw/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "frontscreen":
          "conic-gradient(from 280deg at 100% 40%, rgb(39, 45, 54), rgb(178, 208, 211), rgb(255, 255, 255))",
        "frontscreen-big":
          "conic-gradient(from 275deg at 65% 55%, rgb(39, 45, 54), rgb(151, 185, 188), rgb(255, 255, 255))",
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
