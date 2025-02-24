import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
      screens: {
        sm: "648px",
        md: "746px",
        lg: "960px",
        xl: "1280px",
      },
    },
    fontFamily: {
      primary: ['var(--font-Inter)'],
    },
    extend: {
      boxShadow: {
        'custom': '2px 2px 5px 0 rgba(0, 0, 0, 0.5)',
      },
      opacity: {
        '33': '0.33',
      },
      colors: {
        primary: "#fe0001",
        accent: {
          DEFAULT: "#fe0001",
          hover: "#ffffff",
        },
        secondery: "#17171a",
        blue: "#0A284C",
        header: "#121216",
        footer: "#1E1E22",
        border: "#4b3f3f",
        input: "#121216",
        lightGrey: "#ADADB8",
        serBg: "#0d0d0e",
      },
      borderRadius: {
        '10px': '10px',
        '4px': '4px',
      },
    },
  },
  plugins: [],
};

export default config;
