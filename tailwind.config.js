/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./dist/*.{html,js}'],
   theme: {
      colors: {
         transparent: 'transparent',
         current: 'currentColor',
         white: 'hsl(0,0%,100%)',
         lime: 'hsl(75,94%,57%)',
         grey700: 'hsl(0,0%,20%)',
         grey800: 'hsl(0,0%,12%)',
         grey900: 'hsl(0,0%,8%)',
      },
      fontFamily: {
         interBold: ['Inter-Bold', 'sans-serif'],
         interSemiBold: ['Inter-SemiBold', 'sans-serif'],
         interRegular: ['Inter-Regular', 'sans-serif'],
      },
      extend: {},
   },
   plugins: [],
};
