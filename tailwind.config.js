/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(20px, -20px) rotate(180deg)' }
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '33%': { borderRadius: '45% 55% 65% 35% / 40% 45% 55% 60%' },
          '66%': { borderRadius: '35% 65% 50% 50% / 55% 30% 70% 45%' },
          '100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }
        }
      },
      animation: {
        scroll: 'scroll 50s linear infinite',
        float: 'float 20s ease-in-out infinite',
        morph: 'morph 12s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
