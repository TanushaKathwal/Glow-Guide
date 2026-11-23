// GlowGuide service worker: pages are network-first (so deploys show up), static assets are cache-first.
const CACHE = 'glowguide-v6';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon.svg', './icon-192.png', './icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== CACHE).map(x => caches.delete(x))))); self.clients.claim(); });
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const put = res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {}); return res; };
  if (req.mode === 'navigate') { e.respondWith(fetch(req).then(put).catch(() => caches.match('./index.html'))); return; }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(put).catch(() => hit)));
});
