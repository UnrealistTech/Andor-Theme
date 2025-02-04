const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    'templates/**/*.html.twig',
    'components/**/*.twig',
  ],
  safelist: [
  ],
  theme: {
    extend: {
      colors: {
        // Example of adding named colors, allows bg-primary or text-primary, etc.
        primary: '#bb0bad',
      },
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}