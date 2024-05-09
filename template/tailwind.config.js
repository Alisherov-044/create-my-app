/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: "var(--primary-100)",
                },
            },
            boxShadow: {},
        },
    },
    plugins: [],
};
