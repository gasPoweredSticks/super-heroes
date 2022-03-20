module.exports = {
  content: ["./src/**/*.{html,ts}"],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "mono-hat": ["Red Hat Mono"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
