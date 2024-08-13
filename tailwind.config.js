/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#F7C873',
          DEFAULT: '#AD823B',
          dark: '#B8860B',
        },
      },
      fontFamily: {
        bona: ['var(--font-bona)'],  // Titles
        titillium: ['var(--font-titillium)'],  // Body
        robotoslab: ['var(--font-robotoslab)'],  // Clickables
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.glass-effect': {
          'background-color': 'rgba(255, 255, 255, 0.2)',
          'backdrop-filter': 'blur(10px)',
          '-webkit-backdrop-filter': 'blur(5px)', // For Safari support
          'box-shadow': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
          'border-radius': '0.475rem', // Tailwind's default rounded-md
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
};
