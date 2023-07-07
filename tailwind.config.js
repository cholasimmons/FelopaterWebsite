/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        MontserratAlternates: "'MontserratAlternates', sans-serif",
      },
      borderRadius: '12px'
    },
  },
  plugins: [],
}

