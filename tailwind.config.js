/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '576px',
        lg: '992px',
      },
      boxShadow: {
        card: '0 2px 8px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        light: '#fff',
        dark: '#1f1f1f',
        background: '#eff1f5',
        accent: '#80176c',
        'accent-light': '#a62b8f',
        danger: '#dc0311',
      },
    },
  },
  plugins: [],
}
