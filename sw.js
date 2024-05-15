const cacheName = "v1";

const cacheAssets = [
  "index.html",
  "./assets/img",
  "./assets/css/base.css",
  "./assets/css/style.css",
  "./assets/js/bundles.js",
];

//Installing the sw and caching
self.addEventListener("install", (e) => {
  console.log("Service Worker: Installed");
  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        console.log("Service Worker: Caching Files");
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWating())
  );
});

//Activating the sw
self.addEventListener("activate", (e) => {
  console.log("Service Worker: Activated");
  //Removing old cache
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log("Service Worker: Clearing Old Cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

//sw from server | fetching cache
self.addEventListener("fetch", (e) => {
  console.log("Service Worker: Fetching");
  //Checks if the server is live else fetch from cache
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
