/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Strict Master Palette
        carbon: '#141414',
        concrete: '#A6A6A6',
        chalk: '#F4F4F4',
        // Signature Accents
        signalYellow: '#E4BD25',
        racingRed: '#B74438',
        alpineBlue: '#438CA9',
        // Supporting pure values
        pureBlack: '#000000',
        pureWhite: '#FFFFFF',
      },
      fontFamily: {
        // Primary Display (GT America Extended style)
        display: ['"GT America Extended"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        // Secondary Functional (FF DIN style)
        sans: ['"FF DIN"', '"DIN Alternate"', 'Roboto', 'Inter', 'sans-serif'],
        // Technical Accent (Eurostile Next style)
        technical: ['"Eurostile Next"', '"Eurostile"', '"Microgramma"', 'monospace', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'technical': '0.18em',
        'extended': '0.12em',
      },
    },
  },
  plugins: [],
};
