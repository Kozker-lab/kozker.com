/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      // Brand Colors
      primary: "#FF6E30", // Primary Orange
      text: "#212121",    // Dark Grey
      background: {
        DEFAULT: "#FFFEFD", // Egg White
        secondary: "#F9FAFB" // Light Gray
      },
      accent: "#4F4F6F",
      // Supporting Colors
      success: "#10B981",
      error: "#EF4444",
      info: "#3B82F6",
      // Utility Colors
      gray: colors.gray,
      neutral: colors.neutral,
      zinc: colors.zinc,
      // Legacy colors needed for existing components
      orange: {
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#FF6E30", // Updated to match primary
        400: "#FF6E30", // Updated to match primary
        500: "#FF6E30", // Updated to match primary
        600: "#FF6E30", // Updated to match primary
      },
      yellow: {
        50: "#fefce8",
        100: "#fef9c3",
        400: "#facc15",
        500: "#eab308",
      },
      red: colors.red,
    },
    extend: {
      borderRadius: {
        'sm': '0px',
        'md': '1px',
        'lg': '2px',
        'xl': '4px'
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'mono': ['SF Mono', 'monospace']
      },
      spacing: {
        // 8px increment system
        '2': '8px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
      }
    },
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
  ],
};
