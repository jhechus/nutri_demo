import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f4f7f4',
          100: '#e8efe8',
          200: '#d4e0d4',
          300: '#b0cbb0',
          400: '#8faf8f',
          500: '#6b966b',
          600: '#4a7a4a',
          700: '#3a633a',
          800: '#2f522f',
          900: '#274427',
        },
        cream: {
          50: '#fdfcf8',
          100: '#fbf9f0',
          200: '#f7f2e1',
          300: '#f1e8c8',
          400: '#e9dba5',
          500: '#e0cf80',
          600: '#d4b862',
          700: '#c09a4d',
          800: '#a67f42',
          900: '#8c6a3a',
        },
        beige: {
          50: '#faf9f5',
          100: '#f5f3eb',
          200: '#ebe7d7',
          300: '#ddd6bd',
          400: '#cbc29e',
          500: '#b8a881',
          600: '#a48d68',
          700: '#8a7356',
          800: '#725e48',
          900: '#5e4e3e',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
