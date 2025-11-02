const CACHE_NAME = "photofolia-cache-v1";
const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/assets/favicon.ico",
  "/assets/favicon-16x16.png",
  "/assets/favicon-32x32.png",
  "/assets/apple-touch-icon.png",
  "/assets/android-chrome-192x192.png",
  "/assets/android-chrome-512x512.png",
  "/assets/site.webmanifest",
  "/styles.css",
  "/script.js"
];

// Install: cache assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching assets...");
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Activate: remove old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("Deleting old cache:", key);
            return caches.delete(key);
          }
        })
      )
    )
  );
});

// Fetch: cache-first strategy
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return (
        cachedResponse ||
        fetch(event.request).then((response) => {
          // Optionally cache dynamically fetched items
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, response.clone());
            return response;
          });
        })
      );
    })
  );
});
