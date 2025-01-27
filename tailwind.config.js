/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'carousel': 'carousel 30s linear infinite',
      },
    },
  },
  plugins: [],
};