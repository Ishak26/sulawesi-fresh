/** @type {import('tailwindcss').Config} */
export default {
  content: ['./resources/**/*.blade.php', './resources/**/*.js', './resources/**/*.jsx'],
  theme: {
    extend: {
      animation: {
        'slide-down': 'slide-down 0.5s ease-out forwards',
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
      },
    },
  },
  plugins: [],
}
