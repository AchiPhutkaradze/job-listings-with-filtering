/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        boxShadow: "0 15px 20px -5px #0d718226",
      },
      backgroundColor: {
        cardColor: "#fff",
        color: "#effafa",
        headerBgColor: "#5ca5a5",
        buttonBgColor: "#5ca5a51a",
      },
      color: {
        textColor: "#5ca5a5",
      },
    },
  },
  plugins: [],
};
