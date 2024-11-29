/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        fadeIn:{
          '0%': { opacity: 0, transform:'translateY(200px)' },
          '100%': { opacity: 1, transform:'translateY(0)' },
        },
        fadeOut:{
          '0%': { opacity: 1, transform:'translateX(0)' },
          '100%': { opacity: 0, transform:'translateX(1000px)' },
        }
      },
      animation:{
        fadeIn: 'fadeIn 1s linear ',
        fadeOut: 'fadeOut 1s linear',
      }
    },
  },
  plugins: [],
}

