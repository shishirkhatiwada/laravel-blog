const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
    ],

    theme: {
        extend: {},
    },

    plugins: [
        require('@tailwindcss/typography'),
    ],
};
