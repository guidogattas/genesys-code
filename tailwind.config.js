/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bgMainColor: "#181818",
                navBarBG: "#181818",
                dropDownBG: "#194643",
                mainText: "#FFFFFF",
                secondaryText: "#1EFFF2",
                footerBG: "#181818",
                buttonMain: "#14b8a6",
                buttonHover: "#0d9488",
                buttonText: "#FFFFFF",
            },
            fontFamily: {
                'darker': ['Darker Grotesque', 'sans-serif'],
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
