/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}