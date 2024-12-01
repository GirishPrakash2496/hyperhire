/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
      },
      colors: {
        "custom-blue": "#1E40AF",
      },
      fontSize: {
        xxl: "1.75rem",
      },
    },
  },
  plugins: [],
};
