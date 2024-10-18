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
                "divider": "#000000"
            }
        },
    },
    plugins: [],
}

