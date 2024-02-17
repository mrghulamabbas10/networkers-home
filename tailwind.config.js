/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#242D4F',
        secondary: '#5E378F',
        borderColor: 'rgba(35, 45, 79,0.4)',
        perpal: '#A345FF',
      },
    },
  },
  plugins: [],
}
