// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'aurora-bg': '#0E1116',
        'aurora-card': '#161A20',
        'aurora-text-primary': '#EAEAEA',
        'aurora-text-secondary': '#A1A1AA',
        'aurora-accent-purple': '#7B61FF',
        'aurora-accent-blue': '#3C82F6',
        'aurora-border': 'rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        // Define 'Inter' como a fonte sans-serif padrão do projeto
        sans: ['Inter', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}