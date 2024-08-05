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
        cormorant: ['var(--font-titillium)'],  // Body
        roboto: ['var(--font-robotoslab)'],  // Clickables
      },
    },
  },
  plugins: [],
};
