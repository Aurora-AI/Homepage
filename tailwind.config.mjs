/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'background': '#F8F9FA',      // Branco suave para o fundo principal
        'sidebar-bg': '#E9ECEF',      // Cinza claro para a barra lateral
        'text-primary': '#343A40',     // Carvão escuro para textos
        'text-secondary': '#6c757d',  // Cinza para textos secundários

        'pastel-blue': {
          DEFAULT: '#a8d8ea',
          darker: '#9AB8C2',
        },
        'pastel-yellow': {
          DEFAULT: '#fdfd96',
        },
        'pastel-green': {
          DEFAULT: '#c7e9c0',
        },
      },
    },
  },
  plugins: [],
};