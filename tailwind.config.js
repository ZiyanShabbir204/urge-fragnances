/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'media',
  theme: {
    extend: {
      screens: {
        xl3: "1600px",
        md2: "854px",
        xl4: "2000px",
        xs: '400px',
        md1: '550px'
      },
      colors: {
        customRoyalBlue: "#1c4eff",
        customBlue: "#000D28",
        customWhite: "#FFFFFF",
        customLightBlue: "#F5F7FF",
        customDarkBg: "#2B353A",
        customDarkBgCom: "#314249",
        customGrey: "#8E8E8E",
        customGreen: "#A0CB48",
        customWoodSmoke: "#0B0C0C",
        customMineShaft : "#303030",
        customInternationalKleinBlue:"#0026A3",
        customBlack: "#232323",
        customLightGray: "#EBEBEB",
        customNero : "#262626",
        customBrown : "#513A28",
        customBeige :  "#DFD5C0",
        customLightBrown: "#816F4C"

       

      },
      fontSize: {
        'custom': ['16px', '26px'],
        'custom-heading' : ['18px','30px']
      }
    },
    fontFamily: {
      heading: ['"Helvetica"', "sans-serif"],
      body: ['"Figtree"', "sans-serif"],
    },
  },
  plugins: [],
};

