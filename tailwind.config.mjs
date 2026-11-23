/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bone: {
          50: '#FAF9F6',
          100: '#F5F4EE',
          200: '#EBE9DF',
          300: '#DEDACF',
          400: '#C7C2B4',
        },
        carbon: {
          950: '#0F1010',
          900: '#161817',
          850: '#1D201F',
          800: '#262928',
          700: '#383C3A',
        },
        burnt: {
          500: '#D96536',
          600: '#BF592F',
          700: '#9E4420',
        },
        graphite: {
          400: '#8E9590',
          500: '#777E79',
          600: '#5E6460',
          700: '#464B48',
        },
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'Iowan Old Style', 'serif'],
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-slow': 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
