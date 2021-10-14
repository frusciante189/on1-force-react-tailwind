module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        onRed: "#ff494e",
        onYellow: "#f1f107",
        onBlue: "#03bdb8",
      },
      backgroundImage: {
        hero: "url('https://assets.website-files.com/60ef399b992671a8275e6cff/610d793938c82b5278a4267a_0n1-bg.png')",
        clock:
          "url('https://assets.website-files.com/60ef399b992671a8275e6cff/60f21a840805d449f14685a7_oni-logo-6.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
