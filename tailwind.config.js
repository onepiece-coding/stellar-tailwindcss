/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sourceSans: ["'Source Sans 3'", "serif"],
      },
      colors: {
        bodyBgColor: "#fafbfd",
        headerBgColor: "#f7f7f7",
        textColor: "#676d79",
        etiamColor: "#efa8b0",
        magnaColor: "#c79cc8",
        tempusColor: "#a89cc8",
        aliquamColor: "#9bb2e1",
        nullamColor: "#8cc9f0",
        blueColor: "#8cc9f0",
        transparentedBlueColor: "#9acff2",
        grayColor: "#dedede40",
      },
      backgroundImage: {
        heading: "linear-gradient(90deg, #efa8b0, #a89cc8, #8cc9f0)",
      },
      boxShadow: {
        outline: "inset 0 0 0 1px #dddddd",
      },
    },
  },
  plugins: [],
};
