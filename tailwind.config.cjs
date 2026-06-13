/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'serrea-cream': '#F7EFE6',
        'serrea-green': '#1F5F2F',
        'serrea-leaf': '#2A6B3A',
        'serrea-gold': '#D4A017'
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-in': 'fade-in 700ms ease-out both',
        'fade-in-delay': 'fade-in 700ms ease-out 150ms both',
        'fade-in-delay-2': 'fade-in 700ms ease-out 300ms both',
        'fade-in-delay-3': 'fade-in 700ms ease-out 450ms both'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
