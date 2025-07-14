// Caminho: tailwind.config.mjs

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Cores base da interface
        'background': '#F8F9FA', // Um branco suave, quase cinza
        'sidebar-bg': '#E9ECEF', // Um cinza um pouco mais escuro para a sidebar
        'text-primary': '#343A40', // Carvão escuro para texto principal
        'text-secondary': '#6c757d', // Cinza para texto secundário

        // Paleta Pastel para destaques
        'pastel-blue': {
          DEFAULT: '#a8d8ea', // Azul principal
          darker: '#9AB8C2',
        },
        'pastel-yellow': {
          DEFAULT: '#fdfd96', // Amarelo
        },
        'pastel-green': {
          DEFAULT: '#c7e9c0', // Verde
        },
        
        // Cores de feedback
        'success': '#40c057',
        'error': '#fa5252',
      },
    },
  },
  plugins: [],
};