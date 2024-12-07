import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: "var(--color-primary-red)",
          cyan: "var(--color-primary-cyan)",
          orange: "var(--color-primary-orange)",
          blue: "var(--color-primary-blue)",
        },
        neutral: {
          "very-dark-blue": "var(--color-neutral-very-dark-blue)",
          "grayish-blue": "var(--color-neutral-grayish-blue)",
          "very-light-gray": "var(--color-neutral-very-light-gray)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
