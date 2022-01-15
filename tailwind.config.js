module.exports = {
    purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            spacing: {
                120: '30rem'
            }
        },
    },
    variants: {},
    plugins: [
        require('daisyui')
    ],
    daisyui: {
        themes: false
    }
}
