import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "1.5rem",
            screens: {
                "2xl": "1200px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                // Custom story colors
                night: {
                    deep: "hsl(var(--night-deep))",
                    mid: "hsl(var(--night-mid))",
                    soft: "hsl(var(--night-soft))",
                },
                star: {
                    warm: "hsl(var(--star-warm))",
                    cool: "hsl(var(--star-cool))",
                },
                glow: {
                    india: "hsl(var(--glow-india))",
                    qatar: "hsl(var(--glow-qatar))",
                },
                warmth: {
                    gold: "hsl(var(--warmth-gold))",
                    soft: "hsl(var(--warmth-soft))",
                },
                sunset: {
                    pink: "hsl(var(--sunset-pink))",
                    peach: "hsl(var(--sunset-peach))",
                },
                pastel: {
                    lavender: "hsl(var(--pastel-lavender))",
                    rose: "hsl(var(--pastel-rose))",
                    cream: "hsl(var(--pastel-cream))",
                    sky: "hsl(var(--pastel-sky))",
                },
                text: {
                    light: "hsl(var(--text-light))",
                    muted: "hsl(var(--text-muted))",
                    warm: "hsl(var(--text-warm))",
                    accent: "hsl(var(--text-accent))",
                },
            },
            fontFamily: {
                display: ["Cormorant Garamond", "serif"],
                playfair: ["Playfair Display", "serif"],
                italiana: ["Italiana", "serif"],
                body: ["Inter", "sans-serif"],
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                "fade-in-up": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(30px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                "fade-in": {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                "scale-in": {
                    "0%": {
                        opacity: "0",
                        transform: "scale(0.9)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "scale(1)",
                    },
                },
                shimmer: {
                    "0%": { backgroundPosition: "-200% 0" },
                    "100%": { backgroundPosition: "200% 0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "fade-in-up": "fade-in-up 0.8s ease-out",
                "fade-in": "fade-in 1s ease-out",
                "scale-in": "scale-in 0.6s ease-out",
                shimmer: "shimmer 3s linear infinite",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;
