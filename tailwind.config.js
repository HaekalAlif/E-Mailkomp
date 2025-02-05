import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    blue: "#056BF1",
                    dark: "#170036",
                    purple: "#1C073F",
                    indigo: "#1F39D4",
                    orange: "#ED8200",
                },
            },
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            animation: {
                "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "gradient-x": "gradient-x 15s ease infinite",
            },
            keyframes: {
                pulse: {
                    "0%, 100%": {
                        opacity: "0.2",
                        transform: "scale(1) rotate(0deg)",
                    },
                    "50%": {
                        opacity: "0.3",
                        transform: "scale(1.1) rotate(3deg)",
                    },
                },
            },
        },
    },
    plugins: [],
};
