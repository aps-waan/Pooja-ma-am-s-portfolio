/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316', // Primary lucky orange
          600: '#ea580c', // Deep amber orange
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          gold: '#f59e0b',
          lightGold: '#fef08a',
        },
        dark: {
          bg: '#0B0F17',
          surface: '#111827',
          card: '#1E293B',
          cardHover: '#27354A',
          border: 'rgba(248, 250, 252, 0.08)',
          borderHover: 'rgba(249, 115, 22, 0.35)',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
