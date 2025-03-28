const CACHE_NAME = "static-v1"; // Versioned cache

self.addEventListener("install", (e) => {
   e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(["./", "./src/master.css", "./images/oxy.png"]);
        })
   );
});

self.addEventListener("fetch", (e) => {
    console.log(`Intercepting fetch request for ${e.request.url}`);

    e.respondWith(
        caches.match(e.request).then((cachedResponse) => {
            return cachedResponse || fetch(e.request);
        })
    );
});

self.addEventListener("activate", (e) => {
    e.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        console.log(`Deleting old cache: ${key}`);
                        return caches.delete(key);
                    }
                })
            );
        })
    );
});
