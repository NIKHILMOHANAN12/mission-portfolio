/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // scans your source code
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        ptserif: ['"PT Serif"', "serif"],
        fahkwang: ["Fahkwang", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        zuume: ["Zuume", "sans-serif"],
      },
      fontSize: {
        h1: ["4rem", { lineHeight: "1.2", fontWeight: "700" }], // 64px
        h2: ["3rem", { lineHeight: "1.2", fontWeight: "700" }], // 48px
        h3: ["2.5rem", { lineHeight: "1.4", fontWeight: "600" }], // 40px
        h4: ["2rem", { lineHeight: "1.3", fontWeight: "600" }], // 32px
        h5: ["1.75rem", { lineHeight: "1.35", fontWeight: "500" }], // 28px
        h6: ["1.5rem", { lineHeight: "1.4", fontWeight: "500" }], // 24px
        bodylarge: ["1.5rem", { lineHeight: "1.4", fontWeight: "500" }], // 24px
        bodymedium: ["1.25rem", { lineHeight: "1.5", fontWeight: "400" }], // 20px
        bodysmall: ["1rem", { lineHeight: "1.5", fontWeight: "400" }], // 16px
      },
      colors: {
        neutral: {
          100: "#FAFAFA",
          300: "#F5F5F5",
          500: "#D4D4D4",
          700: "#737373",
          900: "#171717",
        },
        black: "#171717",
        white: "#ffffff",
      },
      animation: {
        bounceY: "bounceY 1s infinite",
        bounceSlow: "bounceY 2s infinite",
      },
    },
  },

  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-scrollbar"),
  ],
};
