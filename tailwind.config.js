/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        dotsMovement: {
          '0%': { transform: 'translateX(-100vw)' },
          // 40–60% bleibt der Dot in der Mitte
          '45%': { transform: 'translateX(0)' },
          '55%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100vw)' },
        },
      },
      animation: {
        dotsMovement: 'dotsMovement 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
