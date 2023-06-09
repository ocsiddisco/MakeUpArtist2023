/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgphoto: "url(./public/bg-photo.jpg)",
      },
      colors: {
        nav01: "#dfbfac",
        nav02: "#e2c8b7",
        nav03: "#d2b2a3",
        twhite: "#fbf5f2",
        tbrown: "#54433A",
      },
    },
    screens: {
      sm: { max: "500px" },
      md: "800px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [require("flowbite/plugin")],
};
