const CACHE_NAME = 'cards-cache-v1';

const STATIC_ASSETS = [
  '/',
];

self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) { return key !== CACHE_NAME; })
            .map(function(key) { return caches.delete(key); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  if (url.pathname.match(/\.(css|js|woff2?|png|jpg|jpeg|gif|svg|ico|webp)$/i)) {
    event.respondWith(
      caches.match(event.request).then(function(cached) {
        const fetched = fetch(event.request).then(function(response) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, clone);
          });
          return response;
        });
        return cached || fetched;
      })
    );
    return;
  }

  if (url.origin === location.origin) {
    event.respondWith(
      fetch(event.request).then(function(response) {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(event.request, clone);
        });
        return response;
      }).catch(function() {
        return caches.match(event.request);
      })
    );
  }
});
