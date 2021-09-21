module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        metronic: "#009ef7",
        navTitleColor: "#5e6278",
      },
      width: {
        "768": "48rem",
      },
      screens: {
        xs: "500px",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "checked"],
      textColor: ["checked"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};
