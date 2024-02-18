/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  // darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },
    extend: {
      colors: {
        primary: '#242D4F',
        secondary: '#5E378F',
        borderColor: 'rgba(0, 0, 0, 0.12)',
        perpal: '#A345FF',
      },
    },
  },
  plugins: [],
}
