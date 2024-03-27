import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      colors: {
        AZUL: {
          100: "var(--azul-100)",
          200: "var(--azul-200)",
          300: "var(--azul-300)",
        },
        VERDE: {
          100: "var(--verde-100)",
          200: "var(--verde-200)",
          300: "var(--verde-300)",
        },
        AMARELO: {
          100: "var(--amarelo-100)",
          200: "var(--amarelo-200)",
          300: "var(--amarelo-300)",
        },
        VERMELHO: {
          100: "var(--vermelho-100)",
          200: "var(--vermelho-200)",
          300: "var(--vermelho-300)",
        },
        CINZA: {
          100: "var(--cinza-100)",
          200: "var(--cinza-200)",
          300: "var(--cinza-300)",
          400: "var(--cinza-400)",
        },
        GLOBAL: {
          BRANCO: "var(--global-branco)",
          PRETO: "var(--global--preto)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
