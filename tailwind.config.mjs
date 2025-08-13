/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  safelist: [
    "btn-primary",
    "btn-secondary",
    "btn-outline",
    "btn-ghost",
    "btn-destructive",
    "btn-sm",
    "btn-md",
    "btn-lg",
    "btn-xl",
    "card",
    "card-hover",
    "input",
    "label",
    "error-message",
  ],
  theme: {
    extend: {
      colors: {
        // Background layers
        background: "hsl(var(--background))",
        surface: "hsl(var(--surface))",

        // Text hierarchy
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted-foreground))",

        // Brand colors
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },

        // Interactive states
        hover: "hsl(var(--hover))",
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        input: "hsl(var(--input))",

        // Semantic colors
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
      },

      // Enhanced shadows using your variables
      boxShadow: {
        elevation: "var(--shadow-elevation)",
        card: "var(--shadow-card)",
        button: "var(--shadow-button)",
        floating: "var(--shadow-floating)",
      },

      // Border radius using your variable
      borderRadius: {
        DEFAULT: "var(--radius)",
        lg: "calc(var(--radius) + 2px)",
        md: "var(--radius)",
        sm: "calc(var(--radius) - 2px)",
      },

      // Spacing using your variables
      spacing: {
        xs: "var(--space-xs)",
        sm: "var(--space-sm)",
        md: "var(--space-md)",
        lg: "var(--space-lg)",
      },

      fontFamily: {
        primary: ["Inter", "system-ui", "sans-serif"],
        secondary: ["Merriweather", "Georgia", "serif"],
        // Aliases for semantic usage
        ui: ["Inter", "system-ui", "sans-serif"],
        reading: ["Merriweather", "Georgia", "serif"],
      },

      // Font sizes with good reading experience
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        // Reading specific sizes
        "reading-sm": ["0.875rem", { lineHeight: "1.6rem" }],
        "reading-base": ["1rem", { lineHeight: "1.7rem" }],
        "reading-lg": ["1.125rem", { lineHeight: "1.8rem" }],
        "reading-xl": ["1.25rem", { lineHeight: "1.9rem" }],
      },
    },
  },
  plugins: [],
};
