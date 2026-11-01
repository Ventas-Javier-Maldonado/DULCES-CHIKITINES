const CACHE_NAME = "chikitines-catalogo-v6";
const CORE_FILES = [
  "./", "./index.html", "./css/styles.css", "./js/app.js", "./manifest.webmanifest",
  "./images/hero-dulces.svg", "./images/familia-sonrics.svg", "./images/familia-mexicana.svg", "./images/antojo-feliz.svg",
  "./images/item-paletas.svg", "./images/item-gomitas.svg", "./images/item-chocolates.svg", "./images/item-tamarindo.svg", "./images/item-alegrias.svg", "./images/item-obleas.svg",
  "./images/fondo-dulceria.svg", "./images/logo-chikitines.png", "./images/logo-barrio-digital.png", "./icons/chikitines-icon.svg", "./audio/candy-chime.wav"
];
self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
    if (response.ok) caches.open(CACHE_NAME).then((cache) => cache.put(event.request, response.clone()));
    return response;
  }).catch(() => caches.match("./index.html"))));
});
