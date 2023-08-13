/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "360px", // Custom small screen breakpoint
        md: "668px", // Custom medium screen breakpoint
        lg: "1024px", // Custom large screen breakpoint
        // Add more custom breakpoints as needed
      },
    },
  },
  plugins: [],
};
