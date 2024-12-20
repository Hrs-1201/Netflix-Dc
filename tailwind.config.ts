import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "jack-sparrow": "url('/jack-game.jpg')",
        "pirate-map": "url('/jack-game2.jpg')",
        "ship-deck": "url('/jack-sparrow.jpg')",
      },
      keyframes: {
        "cloud-blast": {
          "0%": { transform: "scale(0.5)", opacity: "1" },
          "100%": { transform: "scale(3)", opacity: "0" },
        },
      },
      animation: {
        blast: "cloud-blast 0.5s ease-out",
      },
    },
  },

  plugins: [],
  corePlugins: {
    scrollBehavior: true,
  },
} satisfies Config;
