/** @type {import('tailwindcss').Config} */
export default {
  content: ['./resources/**/*.blade.php', './resources/**/*.js', './resources/**/*.jsx'],
  theme: {
    extend: {
      animation: {
        'slide-down': 'slide-down 0.5s ease-out forwards',
        'fade-in': 'fade-in 0.2s ease-out forwards',
        'fade-out': 'fade-out 0.2s ease-out forwards',
      },
      fontFamily: {
        kanit: ['kanit'],
      },
      colors: {
        primary: '#22c55e',
      },
      keyframes: {
        'slide-down': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0.5', transform: 'scale(0)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'fade-out': {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.9)' },
        },
      },
    },
  },
  plugins: [],
}
