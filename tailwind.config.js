/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          pure: '#0d0f1a',
          near: '#10121e',
          deep: '#0a0c16',
        },
        gray: {
          dark: '#13152a',
          surface: '#161930',
        },
        accent: {
          blue: '#3b82f6',
          purple: '#8b5cf6',
          cyan: '#06b6d4',
        },
        neon: {
          blue: '#00d2ff',
          purple: '#9d50bb',
          cyan: '#3a7bd5',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        'float-delayed': 'float 10s ease-in-out infinite 2s',
        'glow': 'glow 4s ease-in-out infinite',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-25px) rotate(0.5deg)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(59, 130, 246, 0.2)' },
          '50%': { boxShadow: '0 0 25px rgba(59, 130, 246, 0.5)' },
        }
      },
      backdropBlur: {
        xs: '2px',
        xxl: '40px',
      }
    },
  },
  plugins: [],
}
