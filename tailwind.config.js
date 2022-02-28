module.exports = {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hypay: {
          primary: '#36076B', // dark-purple
          secondary: '#8021FF', // purple
          pink: '#D95F76',
          black: '#242424',
          gray: '#9FA2B4',
          'light-gray': '#EEEEEE', // background
          'light-blue': '#20A3EF',
          cyan: '#00B5DD',
          orange: '#FFB119',
          green: '#1B9B65',
        }
      },
    },
  },
  plugins: [],
}
