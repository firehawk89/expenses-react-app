/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        lg: "992px",
      },
      boxShadow: {
        card: "0 2px 8px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        light: "#fff",
        dark: "#1f1f1f",
        primary: "#1f1f1f",
        secondary: "#3f3f3f",
        background: "#a892ee",
        accent: "#40005d",
        "accent-light": "#510674",
        danger: "#dc0311",
      },
    },
  },
  plugins: [],
};
