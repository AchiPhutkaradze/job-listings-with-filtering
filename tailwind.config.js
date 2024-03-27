/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        textColor: "#5ca5a5",
        nameColor: "#000000",
        lightColor: "#7c8f8f",
      },
      boxShadow: {
        boxShadow: "0 15px 20px -5px #0d718226",
      },
      backgroundColor: {
        cardColor: "#fff",
        color: "#effafa",
        headerBgColor: "#5ca5a5",
        buttonBgColor: "#5ca5a51a",
        lightColor: "#7c8f8f",
        lineColor: "#b7c4c4",
      },
      height: {
        height: "1px",
      },
      maxWidth: {
        maxWidth: "1110px",
      },
      width: {
        width: "428px",
      },
    },
  },
  plugins: [],
};
