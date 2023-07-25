/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryNormal: "#06121e",
        primaryDark: "#040f1a",
        primaryLight: "#0c2135",
        secondaryNormal: "#090d11",
        secondaryDark: "#06090c",
        secondaryLight: "#1a1f25",
        blackNormal: "#232224",
        blackDark: "#161617",
        blackLight: "#353436",
        whiteNormal: "#fff",
        whiteDark: "#edeaef",
        whiteLight: "#fefbff",
        redNormal: "#d94140",
        redDark: "#b42b2b",
        redLight: "#d34040"
      },
      keyframes: {
        translateY: {
          'from': { transform: 'translateY(0) scale(1)' },
          'to': { transform: 'translateY(-8px) scale(1.1)' },
        },
        scaleButton: {
          'from': { transform: 'scale(1)' },
          'to': { transform: 'scale(1.07)' },
        }
      },
      animation: {
        translateY: 'translateY 0.8s infinite alternate',
        scaleButton: 'scaleButton 0.8s infinite alternate'
      },
      screens: {
        'mx-768': {'max': '768px'},
        'mx-480': {'max': '480px'}
      },
      backgroundImage: {
        'header': "linear-gradient(to bottom, rgba(6, 18, 30, 0.1), #06121e), url('../assets/bg.svg')"
      },
      boxShadow: {
        'haircut': '0px -1px 17px -4px rgba(0, 0, 0, 0.45)'
      }
    },
  },
  plugins: [],
}
