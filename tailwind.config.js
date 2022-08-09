const { url } = require('inspector')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'dark-blue-gray': '#666CA3',
      'space-cadet': '#13183F',
      'roman-silver': '#83869A',
      'french-rose': '#F74780',
      'carnation-pink': '#FFA7C3',
      white: '#FFFFFF',
      // Below are the gradient colors
      frostbite: '#F02AA6',
      'outrageous-orange': '#FF6F48',
      'blue-ryb': '#4851FF',
      magnolia: '#F0F1FF',
      transparent: 'transparent',
    },
    fontFamily: {
      sans: ['Plus Jakarta Sans', 'sans-serif'],
    },
    fontWeight: {
      medium: 500,
      bold: 700,
      'extra-bold': 800,
    },
    screens: {
      tablet: '768px',
      desktop: '1440px',
    },
    extend: {
      backgroundImage: {
        'hero-tablet': 'url(./assets/image-hero-tablet.webp)',
        'hero-desktop': 'url(./assets/image-hero-desktop.webp)',
      },
    },
  },
  plugins: [],
}

//bg-[url("./assets/image-hero-desktop.png")]
