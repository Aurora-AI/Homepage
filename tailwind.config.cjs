// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'aurora-fundo': '#0B0F19',
        'aurora-acento': '#22d3ee',
        'aurora-texto-claro': '#cbd5e1',
        'aurora-texto-escuro': '#334155',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Define Poppins como a fonte padrão
      }
    },
  },
  plugins: [],
}