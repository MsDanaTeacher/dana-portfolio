/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        },
        'fade-in-up': {
          '0%': {
              opacity: '0',
              transform: 'translateY(10px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0)'
          },
      },
    },
    animation: {
        'fade-in-down': 'fade-in-down 1.5s ease-out',
        'fade-in-up': 'fade-in-up 1.5s ease-out',
    },
      colors: {
        'cornflower': '#7477FF',
      }
    },
  },
  plugins: [],
}
