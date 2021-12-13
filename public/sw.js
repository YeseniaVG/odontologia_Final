//chache static, dynamic, immutable


let cacheName = 'cache-v3';

let static_cache ="static_cache-v3";
let dinamic_cache ="dynamic_cache_v1";
let inmutable_cache="inmutable_cache_v1";


self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("cache-reservacion").then((cache) => {
      cache.addAll(["/","index.html", "main.js", "styles.css", ]);
    })
  );
});

self.addEventListener('fetch', event => {

    //cache first
    event.respondWith(
        caches.match(event.request).then(cacheResponse => {
            return cacheResponse || fetch(event.request)
        })
    )
    
})

self.addEventListener("sync", (event) => {
  if (event.tag == "sync-Solicitudes") { //revsar nombre Solicitud
    event.waitUntil("synSolicitudes"); //revisarnombre --Solicitud
  }
});
