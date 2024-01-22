/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        '3.75': '0.9375rem',
      },
      colors: {
        primary: '#5FCB39',
        primaryLight: '#5FCB3933',
        primaryActive: 'rgba(82,255,0,0.91)',
        textSecondary: '#616161',
        textPrimary: '#2D3436',
        separator: '#E1E1E1',
      },
    },
  },
  plugins: [],
}
