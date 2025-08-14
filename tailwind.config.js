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
        // Custom crypto dashboard colors
        crypto: {
          primary: '#f39c12',
          secondary: '#e67e22',
          dark: '#0f0f23',
          darker: '#1a1a2e',
          darkest: '#16213e',
          light: '#ffffff',
          gray: '#cccccc',
          'gray-dark': '#999999',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Enable class-based dark mode
}