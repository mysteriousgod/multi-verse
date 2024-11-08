// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#25D366",
        secondary: "#F7F7F7",
        background: "#F2F2F2",
        accent: "#E0E0E0"
      },
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        'slide-in': 'slide-in 0.3s ease-out',
      }
    }
  },
  plugins: [],
}