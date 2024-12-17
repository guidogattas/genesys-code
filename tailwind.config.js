/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bgMainColor: "#181818",
                navBarBG: "#1F1F1F",
                dropDownBG: "#194643",
                mainText: "#FFFFFF",
                secondaryText: "#1EFFF2",
                footerBG: "#101010",

            },
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
                'arial': ['arial', 'sans-serif'],
            },
            textShadow: {
                'default': '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000',
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                '.text-shadow': {
                    textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000',
                },
            });
        },
    ],
}
