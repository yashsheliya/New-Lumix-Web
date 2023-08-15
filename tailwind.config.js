/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily:{
        Rubik : ['Rubik' , 'sans-serif'],
      },
      colors: {
        primary :"#F53838",
        primary2 :"#F6F6F6",
        primary3 :"#4F5665 ",
        primary4 :"#0B132A ",
        primary5 :"#FF9B9B ",
        primary6 :"#940000 ",
        primary7 :"#EEEEEE ",
        primary8 :"#AFB5C0 ",
        primary9 :"#F1F1F1 ",
        primary10 :"#E8E8E8 ",
        primary11 :"#E8E8E8 ",
        primary12 :"#F9F9F9 ",
        primary13 :"#ACACAC ",
      },
      spacing: {
        '3.3': '13px',
        '33': '33px',
        '77' : '77PX',
        '17' : '17px',
        '60' : '60px',
        '82' : '82px',
        '70' : '70px',
        '50' : '50px',
        '13' : '13px',
        '55' : '55px',
      },
      fontSize: {
        '50' : '50px',
        '35' : '35px',
        '32' : '32px',
        '11' : '11PX',
        '13' : '13PX',
      },
      lineHeight: {
        '70': '70px',
        '30': '30px',
        '50': '50px',
        '45': '45px',
        '25' : '25px',
      },
      borderRadius: {
        'btn-radius': '10PX',
      },
      width: {
        '6.67': '6.67%',
      },
      maxWidth: {
        '220': '220px',
      },
      boxShadow: {
        'dashboard-row-icon': '0px 0px 2px 0px rgba(0, 0, 0, 0.25) inset',
      },
      translate: {
        '0.0': '0px !important',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

 