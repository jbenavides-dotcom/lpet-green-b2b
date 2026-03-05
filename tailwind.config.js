/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors - Matching Shopify Theme
        'brand-accent': '#E11D48',     // Vibrant rose/pink (primary accent)
        'brand-text': '#2C2D2E',       // Main text color
        'brand-heading': '#000000',    // Headings
        'brand-bg': '#FFFFFF',         // Background
        'brand-footer': '#F6F6F6',     // Footer background
        'brand-card': '#F5F5F5',       // Card background
        'brand-border': '#E0E6F4',     // Borders
        'brand-input': '#D8DCED',      // Input borders
        // Legacy colors for tier gradients
        'brand-gold': '#B8860B',
        'brand-green': '#166534',
      },
      fontFamily: {
        'display': ['Tenor Sans', 'serif'],
        'body': ['Jost', 'sans-serif'],
      },
      borderRadius: {
        'brand': '6px',
      },
      boxShadow: {
        'brand': '0 5px 30px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}
