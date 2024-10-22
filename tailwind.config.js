/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        fontKarla:["Karla"],
        fontDM:["DM Serif Display"]
      },
      colors:{
        primary:{
        VioletDark :"hsl(256, 26%, 20%)",
        BlueGrayish:"hsl(216, 30%, 68%)",
        VioletDarkvery:"hsl(270, 9%, 17%)",
        GrayishVioletDark:"hsl(273, 4%, 51%)",
        GrayLight:"hsl(0, 0%, 98%)"
        },

      },
      translate:{
        transform50:"-50%"
      },
      height:{
        desktop:"85vh",
        mobile:"auto"
      }
    },
  },
  plugins: [],
}

