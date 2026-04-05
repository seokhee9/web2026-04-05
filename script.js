if (window.tailwind) {
  tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          "on-background": "#191c20",
          "surface-variant": "#e1e2e8",
          "secondary-fixed-dim": "#ffb68d",
          "on-secondary-fixed-variant": "#763300",
          "tertiary": "#00374f",
          "inverse-surface": "#2e3035",
          "on-primary-fixed": "#001c38",
          "surface-tint": "#27609d",
          "on-primary-container": "#8abcff",
          "surface-bright": "#f9f9ff",
          "on-secondary": "#ffffff",
          "tertiary-container": "#004f70",
          "on-surface": "#191c20",
          "surface-container-highest": "#e1e2e8",
          "on-primary-fixed-variant": "#004882",
          "primary-fixed-dim": "#a3c9ff",
          "surface-container-low": "#f3f3f9",
          "tertiary-fixed": "#c6e7ff",
          "on-primary": "#ffffff",
          "surface-container-high": "#e7e8ed",
          "error": "#ba1a1a",
          "background": "#f9f9ff",
          "surface-container": "#ededf3",
          "inverse-on-surface": "#f0f0f6",
          "surface": "#f9f9ff",
          "primary-fixed": "#d3e4ff",
          "on-tertiary-fixed": "#001e2d",
          "surface-dim": "#d9dadf",
          "error-container": "#ffdad6",
          "surface-container-lowest": "#ffffff",
          "primary-container": "#004b87",
          "on-error-container": "#93000a",
          "inverse-primary": "#a3c9ff",
          "outline": "#727781",
          "on-tertiary-container": "#58c4ff",
          "secondary-fixed": "#ffdbc9",
          "secondary-container": "#fc8a40",
          "secondary": "#9b4500",
          "on-tertiary": "#ffffff",
          "on-error": "#ffffff",
          "on-secondary-container": "#672c00",
          "outline-variant": "#c2c6d1",
          "tertiary-fixed-dim": "#83cfff",
          "on-tertiary-fixed-variant": "#004c6b",
          "on-secondary-fixed": "#331200",
          "on-surface-variant": "#424750",
          "primary": "#003461"
        },
        fontFamily: {
          "headline": ["Plus Jakarta Sans", "Pretendard", "sans-serif"],
          "body": ["Manrope", "Pretendard", "sans-serif"],
          "label": ["Manrope", "sans-serif"]
        },
        borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
      },
    },
  };
}

function map(place){ 
  window.open('https://www.google.com/maps/search/' + encodeURIComponent(place)); 
}
