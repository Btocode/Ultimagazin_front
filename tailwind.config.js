/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Urbanist", "sans-serif", "ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        display: ["Oswald"],
        body: ["Open Sans"],
      },
      colors: {
        primary: "#034F75",
        secondary: "#D3E7F0",
        light: "#ffffff",
        dark: "#000000",
      },
      screens: {
        sm: { min: "350px", max: "600px" },
        md: { min: "601px", max: "820px" },
        lg: { min: "821px", max: "1249px" },
        xl: { min: "1250px" },
      },
    },
  },
  plugins: [],
};
