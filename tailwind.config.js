/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient1': 'linear-gradient(to right, #eef2f3, #8e9eab)',
        'gradient2': 'linear-gradient(to right, #d7d2cc, #304352)',
      },
    },
  },
  plugins: [],
}
