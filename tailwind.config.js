module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        magenta: "#aa076b",
        darkMagenta: "#61045f",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#eeeeee",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          md: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
