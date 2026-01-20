// Service Worker for PWA
const CACHE_NAME = "devpro-portfolio-v1";
const RUNTIME_CACHE = "devpro-runtime-v1";

// Files to cache immediately
const PRECACHE_URLS = [
  "/",
  "/index.html",
  "/styles.css",
  "/fonts.css",
  "/script.js",
  "/manifest.json",
  // Fonts
  "/fonts/JetBrainsMono/JetBrainsMonoNerdFont-Regular.ttf",
  "/fonts/JetBrainsMono/JetBrainsMonoNerdFont-Bold.ttf",
  "/fonts/SpaceMono/SpaceMonoNerdFont-Regular.ttf",
  "/fonts/SpaceMono/SpaceMonoNerdFont-Bold.ttf",
  "/fonts/FiraCode/FiraCodeNerdFont-Regular.ttf",
  "/fonts/FiraCode/FiraCodeNerdFont-Bold.ttf",
];

// Install event - cache static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting()),
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  const currentCaches = [CACHE_NAME, RUNTIME_CACHE];
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return cacheNames.filter(
          (cacheName) => !currentCaches.includes(cacheName),
        );
      })
      .then((cachesToDelete) => {
        return Promise.all(
          cachesToDelete.map((cacheToDelete) => {
            return caches.delete(cacheToDelete);
          }),
        );
      })
      .then(() => self.clients.claim()),
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener("fetch", (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // For navigation requests
  if (event.request.mode === "navigate") {
    event.respondWith(
      caches
        .match(event.request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return fetch(event.request).then((response) => {
            return caches.open(RUNTIME_CACHE).then((cache) => {
              cache.put(event.request, response.clone());
              return response;
            });
          });
        })
        .catch(() => caches.match("/index.html")),
    );
    return;
  }

  // For other requests - cache first, then network
  event.respondWith(
    caches
      .match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          // Return cached version and update cache in background
          fetch(event.request)
            .then((response) => {
              caches.open(RUNTIME_CACHE).then((cache) => {
                cache.put(event.request, response);
              });
            })
            .catch(() => {});
          return cachedResponse;
        }

        // Not in cache - fetch from network
        return fetch(event.request).then((response) => {
          // Cache successful responses
          if (response.status === 200) {
            const responseToCache = response.clone();
            caches.open(RUNTIME_CACHE).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return response;
        });
      })
      .catch(() => {
        // If both cache and network fail, show offline page
        if (event.request.destination === "document") {
          return caches.match("/index.html");
        }
      }),
  );
});

// Handle messages from clients
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
