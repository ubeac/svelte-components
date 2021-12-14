module.exports = {
  content: ['./src/**/*.svelte', 'safelist.txt'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
}
