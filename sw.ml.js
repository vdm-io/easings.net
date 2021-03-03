const version="v3.0.3";function fromNetwork(e){return fetch(e)}function cacheOrNetwork(e){return fromCache(e).catch(()=>fromNetwork(e))}function fromCache(e){return caches.open(version).then(n=>n.match(e).then(n=>n||Promise.reject(e)))}function updateCache(e){return caches.open(version).then(n=>fetch(e).then(t=>n.put(e,t.clone()).then(()=>t)))}self.addEventListener("install",e=>{e.waitUntil(caches.open(version).then(e=>e.addAll(["/keyframes.4d51c095.css","/src.7e7987fa.js","/card.7e7353a0.jpg","/96.8aa68ac4.png","/192.c6b79276.png","/512.276f6d41.png","/logo.e5f6fb53.svg","/mask.f6b15f2c.svg","/","/ml"])))}),self.addEventListener("fetch",(function(e){e.respondWith(cacheOrNetwork(e.request)),e.waitUntil(updateCache(e.request))}));