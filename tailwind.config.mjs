/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'aurora-bg': '#0E1116',
        'dark-blue': '#1a1e26',
        'darker-blue': '#0a0d10',
        'purple-accent': '#7B61FF',
        'cyan-accent': '#3C82F6',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}