/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        no: "#16181C",
        n: "#121212",
        b: "#ffffff",
        bo: "#f5f5ee",
        bc: "#f0fdfb",
        "a-o": "#136365",
        "a-c": "#1b8d90",
        am: "#fefd11",
        rc: "#C4B5FD",
        cel: "#2277FF",
        ros: "#FF76AE",
        roj: "#ff0f0f",
      },
      textColor: {
        ver: "#0e9393",
        no: "#16181C",
        roj: "#e71b1b",
        n: "#16181C",
        b: "#ffffff",
        bc: "#f5f5ee",
        "a-o": "#136365",
        "a-c": "#1b8d90",
        am: "#EFD81D",
        or: "#F1672B",
        cel: "#2277FF",
        ros: "#FF76AE",
      },
    },
  },
  plugins: [],
};
