# GlowGuide

Makeup and skincare matched to your skin, and to what you already own. A static, installable web app for an HCI course project.
No build step and no server. Everything runs in the browser, and photos never leave the device.

## Deploy on Vercel (about 2 minutes)

Option A, command line:

    npm i -g vercel
    cd glowguide
    vercel --prod

Accept the defaults. When asked for a framework choose "Other"; there is no build command and the output directory is `.`.

Option B, GitHub:

1. Push this folder to a new GitHub repository.
2. On vercel.com choose Add New, Project, import the repository.
3. Framework preset "Other", leave Build Command empty, Output Directory `.`, then Deploy.

`vercel.json` already sets security headers, camera permission for the selfie feature, and the right cache rules for the service worker.

## Other hosts

- Netlify: drag the folder onto app.netlify.com/drop.
- GitHub Pages: push, then Settings, Pages, deploy from the main branch root.

## What is in this version

- Single pink palette built on #F9B2D7, responsive from phones to desktops
- Every screen has its own URL hash, so the browser Back and Forward buttons work, including each tutorial step
- Welcome, log in, log out, backup and restore, delete account
- Settings: theme, text size, spacing, animation, start screen, read-aloud
- HCI principles page (#principles) mapping each course principle to the app

## Files

- `index.html`: the whole app (HTML, CSS, JavaScript)
- `manifest.webmanifest`, `icon-*.png`, `icon.svg`: install to home screen
- `sw.js`: offline cache
- `vercel.json`: hosting config

## Notes

- Camera access needs HTTPS, which Vercel provides.
- The catalogue is demo data with indicative prices. Store buttons open a search on Nykaa, Myntra, Amazon.in, Tira and Purplle.
- Profile, Beauty Bag, wishlist and routine history are saved in the browser (localStorage).
