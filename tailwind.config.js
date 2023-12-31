const { Andada_Pro } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./node_modules/flowbite-react/**/*.js",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './homeComponent/**/*.{js,ts,jsx,tsx,mdx}',
    './dashboardComponent/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/**/*.js', './pages/**/*.{ts,tsx}', './public/**/*.html',
  ],
  theme: {
    fontFamily:{
      sans: ["Source Sans Pro", "sans-serif"],
      serif: ["Andada Pro", "serif"],
      open: ["Open Sans", "sans-serif"],
      pius: ["Gentium Pius", "serif"]
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        gentium: ["GentiumBookPlus", "SpaceMono"]
      }
    },
  },
  plugins: [],

}
