import type { Config } from "tailwindcss";

/**
 * Legal-editorial design system.
 * The default Tailwind palette is intentionally REPLACED (not extended) so no
 * default blue/indigo/gray can leak into the UI. Only brand tokens exist.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    // Full palette override — bans the default Tailwind colors.
    colors: {
      transparent: "transparent",
      current: "currentColor",
      inherit: "inherit",
      ink: "rgb(var(--ink-rgb) / <alpha-value>)",
      paper: "rgb(var(--paper-rgb) / <alpha-value>)",
      oxblood: "rgb(var(--oxblood-rgb) / <alpha-value>)",
    },
    fontFamily: {
      serif: ["var(--font-serif)", "Georgia", "Times New Roman", "serif"],
      sans: ["var(--font-sans)", "system-ui", "sans-serif"],
    },
    extend: {
      letterSpacing: {
        eyebrow: "0.12em",
      },
      maxWidth: {
        prose: "34rem",
        content: "82rem",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
