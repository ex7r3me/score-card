import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        "primary-gray": "#2C302E",
        "accent-gray": "#474A48",
        "dark-green": "#62A87C",
        "light-green": "#7EE081",
        "beige": "#F1D6B8",
        "white": "#FFFFFF"
      }
    },
  },
  plugins: [],
}
export default config
