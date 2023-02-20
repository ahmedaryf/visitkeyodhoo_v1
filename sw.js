self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./style.css", "./images/vk_logo.png", "./guesthouse.html", "./style-guesthouse.css", "./gallery.html", "./gallery.css"])
        })
    )
})

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )
})