/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
     `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
    'content/**/*.{md,yml,json,json5,csv}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      'nunito': 'Nunito'
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
