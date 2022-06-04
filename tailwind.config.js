module.exports = {
    mode: 'jit',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/stories/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                hypay: {
                    primary: '#36076B', // dark-purple
                    secondary: '#8021FF', // purple
                    pink: '#D95F76',
                    red: '#BF2A2A',
                    black: '#242424',
                    gray: '#9FA2B4',
                    'light-gray': '#EEEEEE', // background
                    'light-blue': '#20A3EF',
                    placeholder: '#4B506D',
                    iconGray: '#959595',
                    cyan: '#00B5DD',
                    orange: '#FFB119',
                    green: '#1B9B65',
                    
                },
            },
            boxShadow: {
                '3xl': '35px 35px 60px -15px rgba(0, 0, 0, 0.3)',
            },
        },
        backgroundImage: {
            'login-cloth': "url('/images/login-cloth.png')",
            'login-books': "url('/images/login-book.png')",
        },
    },
    plugins: [],
}
