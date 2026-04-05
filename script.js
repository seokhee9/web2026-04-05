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

// Countdown Timer
const countdownDate = new Date("April 12, 2026 00:00:00").getTime();

const updateCountdown = setInterval(function() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (daysEl) daysEl.innerText = days.toString().padStart(2, '0');
  if (hoursEl) hoursEl.innerText = hours.toString().padStart(2, '0');
  if (minutesEl) minutesEl.innerText = minutes.toString().padStart(2, '0');
  if (secondsEl) secondsEl.innerText = seconds.toString().padStart(2, '0');

  if (distance < 0) {
    clearInterval(updateCountdown);
    if (daysEl) daysEl.innerText = "00";
    if (hoursEl) hoursEl.innerText = "00";
    if (minutesEl) minutesEl.innerText = "00";
    if (secondsEl) secondsEl.innerText = "00";
  }
}, 1000);

// Real-time Tokyo Time
function updateTokyoTime() {
  const options = {
    timeZone: 'Asia/Tokyo',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  };
  const formatter = new Intl.DateTimeFormat([], options);
  const tokyoTime = formatter.format(new Date());
  const tokyoTimeEl = document.getElementById("tokyo-time");
  if (tokyoTimeEl) tokyoTimeEl.innerText = `TOKYO ${tokyoTime}`;
}

setInterval(updateTokyoTime, 1000);
updateTokyoTime();
