/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        n: "#16181C",
        b: "#ffffff",
        bc: "#f5f5ee",
        "a-o": "#136365",
        "a-c": "#1b8d90",
        rc: "#C4B5FD"
      },
      textColor: {
        n: "#16181C",
        b: "#ffffff",
        bc: "#f5f5ee",
        "a-o": "#136365",
        "a-c": "#1b8d90",
      }
    },
  },
  plugins: [],
}
