/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // specifies folders/files that are expected to be using Tailwind class names
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // added "xs" for smaller iPhone screens based on inspect tool
        xs: "350px",
        sm: "480px",
        // sm: "640px", <-- old sizing dimensions
        // => @media (min-width: 640px) { ... }

        md: "547px",
        // md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "768px",
        // lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1024px",
        // xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1680px",
        // "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        // 'rose' color hex code
        primary: "#e3242b",
        // 'wine' color hex code
        clicked: "#990f02",
      },
    },
  },
  plugins: [],
};
