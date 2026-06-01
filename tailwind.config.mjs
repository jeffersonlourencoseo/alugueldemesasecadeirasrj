import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        primary: '#C5A059',
        secondary: '#0B1D3A',
        accent: '#1A1A1A',
        cream: '#FAF8F5',
        'border-subtle': '#E8E4DE',
      },
    },
  },
  plugins: [typography],
};
