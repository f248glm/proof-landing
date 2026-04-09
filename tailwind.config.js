/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
        'sf-pro': ['SF Pro', 'sans-serif'],
      },
      colors: {
        'accent': '#dcff9b',
        'primary-text': '#00070e',
        'secondary-text': '#808385',
        'background-cream': '#fbfaf4',
      },
    },
  },
  plugins: [],
}