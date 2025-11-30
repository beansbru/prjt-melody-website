# GTag Hub — Simple Website

This small, static website template is a Gorilla Tag community hub with sections.

Files:
- `main.html` — main HTML entry point
- `style.css` — all styling for the site
- `script.js` — small JS for interactivity (nav toggle, smooth scroll, play animation, form validation)
- `script.js` — small JS for interactivity (nav toggle, smooth scroll, play animation, form validation, theme toggle)
- `script.js` — small JS for interactivity (nav toggle, smooth scroll, play animation, form validation, theme toggle, Discord join)

How to use:
1. Open `main.html` in your browser (double-click or serve with a static server)
2. Replace placeholder text with your content and edit colors in `style.css` as needed.

Theme toggle:
- Use the theme button in the top-right of the header to toggle the Dark Neon theme. Your choice is stored in LocalStorage so it will persist on reload.

Gorilla Tag community tweaks & finishing touches:
- This template is themed for a community inspired by Gorilla Tag — replace all placeholders and media with your own content and ensure you have copyright to any artwork or logos.
- A small favicon (SVG) is included (`favicon.svg`). Replace it with your desired image or original artwork.
- The header includes a "Join Discord" button linking to the official community invite: https://discord.gg/nDD8KaDrUN. You can replace this if you want to use a different invite.
- Accessibility improvements: skip link, focus outlines, and keyboard support for the theme toggle have been added.

Try a simple static server with Python (PowerShell):
```powershell
python -m http.server 8000
Start-Process 'http://localhost:8000/main.html'
```

License: MIT

