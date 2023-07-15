/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_bg: "#FFFAEF",
        orange_c:"#FF7132",
        gray_c:"#555555",
        purple_c:"#8140FF",
        purple_b:"#7B5896",
      },
      screens: {
        xsm: "400px",
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
