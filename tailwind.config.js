/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pop-purple": "var(--pop-purple)",
        "pop-pink": "var(--pop-pink)",
        "pop-blue": "var(--pop-blue)",
        "pop-mint": "var(--pop-mint)",
        "pop-yellow": "var(--pop-yellow)",
        "pop-text": "var(--pop-text)",
        "pop-dark": "var(--pop-dark)",
        "pop-overlay": "var(--pop-overlay)",
      },
      fontFamily: {
        display: ["Fredoka", "sans-serif"],
        bubble: ["Chewy", "cursive"],
        body: ["Quicksand", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-medium": "float 5s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        wiggle: "wiggle 2s ease-in-out infinite",
        "pop-in": "popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
        "pulse-soft": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shine: "shine 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        popIn: {
          "0%": { opacity: "0", transform: "scale(0.5)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shine: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
