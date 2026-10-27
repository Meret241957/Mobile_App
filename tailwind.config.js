/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './features/**/*.{js,jsx,ts,tsx}', './shared/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A5F',
        secondary: '#DCEAF5',
        bg: '#F8FAFC',
        card: '#FFFFFF',
        text: '#1F2937',
        accent: '#D4A853',
        muted: '#6B7280',
        danger: '#DC2626',
        border: '#CBD5E1',
      },
    },
  },
  plugins: [],
};
