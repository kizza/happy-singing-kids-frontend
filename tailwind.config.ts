import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    colors: {
      white: {
        DEFAULT: "#FFFFFF",
      },
      forrest: {
        light: "#d2ed99",
        DEFAULT: "#06b6d4",
        dark: "#07585a",
      },
      grape: {
        DEFAULT: "#9D62A1",
        "50": "#fbf8fb",
        "100": "#f6eff8",
        "200": "#eddfef",
        "300": "#dfc5e2",
        "400": "#cca2d0",
        "500": "#b47cb9",
        "600": "#9d62a1",
        "700": "#7d4b80",
        "800": "#683f69",
        "900": "#583758",
        "950": "#361c36",
      },
      pink: {
        DEFAULT: "#f1748a",
        "50": "#fef2f3",
        "100": "#fde6e9",
        "200": "#fbd0d7",
        "300": "#f7aab6",
        "400": "#f1748a",
        "500": "#e84b6b",
        "600": "#d42a54",
        "700": "#b21e47",
        "800": "#951c41",
        "900": "#801b3d",
        "950": "#470a1d",
      },
      orange: {
        DEFAULT: "#fa8234",
        "50": "#fff6ed",
        "100": "#ffebd5",
        "200": "#fed2aa",
        "300": "#fcb275",
        "400": "#fa8234",
        "500": "#f86617",
        "600": "#e94c0d",
        "700": "#c1370d",
        "800": "#992c13",
        "900": "#7c2712",
        "950": "#431107",
      },
      teal: {
        DEFAULT: "#08898D",
        "50": "#f0fdfc",
        "100": "#cafdf8",
        "200": "#96f9f2",
        "300": "#59efe9",
        "400": "#28d9d8",
        "500": "#0fbbbd",
        "600": "#08898d",
        "700": "#0c7479",
        "800": "#0f5b60",
        "900": "#114d50",
        "950": "#032c30",
      },
      aqua: {
        DEFAULT: "#0a898d",
      }
    },
    extend: {
      boxShadow: {
        'square': '2px 4px 0 0 var(--tw-shadow-color)',
      }
    },
  },
  plugins: [],
}

export default config
