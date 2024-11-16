module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            gridRow: {
                'span-16': 'span 16 / span 16',
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
    content: ["./src/**/*.{html,js}"],
}