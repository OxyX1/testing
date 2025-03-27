self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('possumjs-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/sketch.js',
                '/style.css',
                'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/p5.min.js'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});
