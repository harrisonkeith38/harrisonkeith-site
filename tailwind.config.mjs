/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bone: {
          50: '#FCFBF9',
          100: '#F7F6F2',
          200: '#EFECE4',
          300: '#E2DED4',
          400: '#C8C3B6',
        },
        carbon: {
          950: '#0C0D0C',
          900: '#141514',
          850: '#1B1D1C',
          800: '#262827',
          700: '#3A3D3B',
        },
        burnt: {
          500: '#D25A2B',
          600: '#BA4E22',
          700: '#9A3F19',
        },
        graphite: {
          400: '#8E9490',
          500: '#6E7470',
          600: '#525754',
          700: '#3B3E3C',
        },
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'Iowan Old Style', 'serif'],
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
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
