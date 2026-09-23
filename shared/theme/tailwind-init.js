// GamarraChain - Inicialización Centralizada de Tailwind con tokens de DESIGN.md
if (window.tailwind) {
  window.tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          "primary": "#091426",
          "on-primary": "#ffffff",
          "primary-container": "#1e293b",
          "on-primary-container": "#8590a6",
          "primary-fixed": "#d8e3fb",
          "primary-fixed-dim": "#bcc7de",
          "on-primary-fixed": "#111c2d",
          "on-primary-fixed-variant": "#3c475a",
          "secondary": "#006c49",
          "on-secondary": "#ffffff",
          "secondary-container": "#6cf8bb",
          "on-secondary-container": "#00714d",
          "secondary-fixed": "#6ffbbe",
          "secondary-fixed-dim": "#4edea3",
          "on-secondary-fixed": "#002113",
          "on-secondary-fixed-variant": "#005236",
          "surface": "#f8f9ff",
          "surface-dim": "#cbdbf5",
          "surface-bright": "#f8f9ff",
          "surface-container-lowest": "#ffffff",
          "surface-container-low": "#eff4ff",
          "surface-container": "#e5eeff",
          "surface-container-high": "#dce9ff",
          "surface-container-highest": "#d3e4fe",
          "on-surface": "#0b1c30",
          "on-surface-variant": "#45474c",
          "outline": "#75777d",
          "outline-variant": "#c5c6cd",
          "surface-tint": "#545f73",
          "tertiary": "#0a0054",
          "on-tertiary": "#ffffff",
          "tertiary-container": "#18008f",
          "on-tertiary-container": "#8481ff",
          "tertiary-fixed": "#e2dfff",
          "tertiary-fixed-dim": "#c3c0ff",
          "on-tertiary-fixed": "#0f0069",
          "on-tertiary-fixed-variant": "#3323cc",
          "error": "#ba1a1a",
          "on-error": "#ffffff",
          "error-container": "#ffdad6",
          "on-error-container": "#93000a",
          "background": "#f8f9ff",
          "on-background": "#0b1c30",
          "inverse-surface": "#213145",
          "inverse-on-surface": "#eaf1ff",
          "inverse-primary": "#bcc7de"
        },
        borderRadius: {
          "DEFAULT": "0.25rem",
          "lg": "0.5rem",
          "xl": "0.75rem",
          "full": "9999px"
        },
        spacing: {
          "space-xs": "0.25rem",
          "space-sm": "0.5rem",
          "space-md": "1rem",
          "space-lg": "1.5rem",
          "space-xl": "2rem",
          "margin": "1rem",
          "margin-tablet": "1.5rem",
          "gutter": "1rem",
          "gutter-sm": "0.75rem"
        },
        fontFamily: {
          "body": ["Inter", "sans-serif"],
          "headline": ["Plus Jakarta Sans", "sans-serif"],
          "body-md": ["Inter", "sans-serif"],
          "body-sm": ["Inter", "sans-serif"],
          "body-lg": ["Inter", "sans-serif"],
          "label-sm": ["Inter", "sans-serif"],
          "label-md": ["Inter", "sans-serif"],
          "label-lg": ["Inter", "sans-serif"],
          "headline-sm": ["Plus Jakarta Sans", "sans-serif"],
          "headline-md": ["Plus Jakarta Sans", "sans-serif"],
          "headline-lg": ["Plus Jakarta Sans", "sans-serif"],
          "display-metric": ["Plus Jakarta Sans", "sans-serif"]
        },
        fontSize: {
          "body-sm": ["12px", { lineHeight: "16px", fontWeight: "400" }],
          "body-md": ["14px", { lineHeight: "20px", fontWeight: "400" }],
          "body-lg": ["16px", { lineHeight: "24px", fontWeight: "500" }],
          "label-sm": ["11px", { lineHeight: "14px", fontWeight: "700" }],
          "label-md": ["12px", { lineHeight: "16px", fontWeight: "600" }],
          "label-lg": ["14px", { lineHeight: "20px", fontWeight: "600" }],
          "headline-sm": ["18px", { lineHeight: "24px", fontWeight: "600" }],
          "headline-md": ["22px", { lineHeight: "28px", fontWeight: "700" }],
          "headline-lg": ["28px", { lineHeight: "36px", fontWeight: "700" }],
          "display-metric": ["36px", { lineHeight: "44px", fontWeight: "800" }]
        }
      }
    }
  };
}
