import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-magenta': '#a64d79'
      }
    },
  },
  plugins: [],
} satisfies Config;
