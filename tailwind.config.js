export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        night: {
          950: "#05070f",
          900: "#070b16",
          800: "#0b1120",
          700: "#111a2e",
        },
        ink: {
          DEFAULT: "#e8eefc",
          muted: "#94a3b8",
        },
        accent: {
          blue: "#60a5fa",
          purple: "#a78bfa",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "Consolas", "monospace"],
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(96, 165, 250, 0.45)",
        "glow-purple": "0 0 80px -20px rgba(167, 139, 250, 0.4)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at 20% 10%, rgba(59, 130, 246, 0.18), transparent 45%), radial-gradient(circle at 85% 25%, rgba(139, 92, 246, 0.16), transparent 40%)",
      },
    },
  },
  plugins: [],
};
