/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#213547',
      'text-primary': '#ffffff',
      'error': '#ff0000',
      'ok': '#07ac18',
      'loading': '#ffff00'
    },
    extend: {},
  },
  plugins: [],
}

