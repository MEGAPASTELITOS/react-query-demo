import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'glacier': {
          '50': '#f2f9f9',
          '100': '#ddedf0',
          '200': '#bfdce2',
          '300': '#7ab6c2',
          '400': '#5fa2b1',
          '500': '#448696',
          '600': '#3b6f7f',
          '700': '#355b69',
          '800': '#324d58',
          '900': '#2d424c',
          '950': '#1a2a32',
      },
      'black-stand':'#0e0e11'
      }
    },
  },
  plugins: [],
};
export default config;
