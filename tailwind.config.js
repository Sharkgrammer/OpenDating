/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#7D3C98",
                "primary-light": "#C39BD3",
                "primary-dark": "#512E5F",
                "divider": "#000000",
                "light": "#F9F9F9",
                "light-dark": "#EEEEEE",
                "dark": "#1E1E1E",
                "dark-light": "#3C3C3C"
            },
            maxWidth: {
                "1/2": "50%",
                "2/3": "66.6666%"
            },
            maxHeight: {
                "1/2": "50%",
                "2/3": "66.6666%"
            }
        },
    },
    plugins: [],
}

