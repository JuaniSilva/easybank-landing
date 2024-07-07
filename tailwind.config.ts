import { fontFamily } from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark-blue': 'hls(233, 26%, 24%)',
        'primary-lime-green': 'hls(136, 65%, 51%)',
        'primary-bright-cyan': 'hls(192, 70%, 51%)',
        'neutral-grayish-blue': 'hls(233, 8%, 62%)',
        'neutral-light-grayish-blue': 'hls(220, 16%, 96%)',
        'neutral-very-light-gray': 'hls(0, 0%, 98%)',
      },
      fontFamily: {
        'public-sans': ['var(--font-public-sans)', ...fontFamily.sans],
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
