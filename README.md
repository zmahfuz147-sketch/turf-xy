# XY TURF ZONE

A responsive, underwater-inspired football turf website built with HTML, CSS and vanilla JavaScript.

## Files

- `index.html` — homepage
- `booking.html` — interactive sample booking page
- `style.css` — shared responsive styles and visual system
- `script.js` — language switch, navigation, sample slot data and booking interactions
- `assets/ocean-turf.svg` — custom underwater football-pitch artwork

## Run locally

Open `index.html` in a modern browser. The homepage links to `booking.html`; no build step, backend, database or package installation is required.

The pages load DM Sans and Hind Siliguri from Google Fonts when an internet connection is available. System fallbacks are included.

## Demo notes

- The booking page generates the next seven dates from the visitor's local date.
- Slot availability, rates, contact information and reviews are sample content in the frontend.
- Confirming a booking only displays a local demo confirmation. No reservation is sent or stored on a server.
- English/Bengali switching is built in through the language control in the header.

## Cinematic homepage photo
The homepage hero now uses `assets/xy-underwater-arena.jpg`, a clean crop of the underwater arena image supplied in the conversation. The crop removes the phone screenshot's black margins and viewer controls. The hero text, CTA buttons, and booking panel sit above the photo with layered dark overlays for contrast, plus subtle animated underwater light rays. The hero has mobile-specific styling so the scene remains atmospheric on narrow screens.
