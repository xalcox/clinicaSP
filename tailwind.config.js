/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'scale(1) translate(0, 0)' },
          '25%': { transform: 'scale(1.1) translate(30px, -20px)' },
          '50%': { transform: 'scale(0.95) translate(-20px, 20px)' },
          '75%': { transform: 'scale(1.05) translate(10px, -10px)' },
        },
      },
      animation: {
        blob: 'blob 12s ease-in-out infinite',
      },
    },
  },
  safelist: [
    'animate-blob',
    'animation-delay-2000',
    'bg-[#7cc518]/80',
    'bg-[#0c4f1e]/70',
    'bg-[#a3e635]/50',
    'bg-[#7cc518]/40',
  ],
  plugins: [],
}
