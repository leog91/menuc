"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/menuc/index.html","398880679faf600f2860e988e4911aeb"],["/menuc/static/css/main.4c24c929.css","84b6f3ce1089fdfe42af8512e21be753"],["/menuc/static/js/main.3ff8e375.js","4dde682bc46271c111a376df3d106a88"],["/menuc/static/media/betarraga-back-1.75865032.jpg","7586503239281e4c680c6b60da70071c"],["/menuc/static/media/betarraga-front-1.0822817c.jpg","0822817c6730f1c81487e0db3e3fd0eb"],["/menuc/static/media/empire-back-1.6f712c73.jpg","6f712c733e226451dd2fcd7d18efe896"],["/menuc/static/media/empire-front-1.468d3c56.jpg","468d3c56e2fcdb19fac1a7b37f45a119"],["/menuc/static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["/menuc/static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["/menuc/static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/menuc/static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["/menuc/static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"],["/menuc/static/media/home.e967a712.png","e967a712d4ad237b63785449f890f9c8"],["/menuc/static/media/huracan-back-2.40ea976e.jpg","40ea976e12b63423ee50ba073a9debc5"],["/menuc/static/media/huracan-back1.3ca166d1.jpg","3ca166d165b43ba2516365b10c8a4873"],["/menuc/static/media/huracan-front1.5d791ef5.jpg","5d791ef5a3d935c26684fd014434c42e"],["/menuc/static/media/huracan-front2.458a0e39.jpg","458a0e39dd06c89d94f50938992dc748"],["/menuc/static/media/la-familia-a2.48813d47.jpg","48813d47ffc1884bbc94a0e846b1c676"],["/menuc/static/media/la-familia-b2.5929b402.jpg","5929b40269c8854f14c53a0add199810"],["/menuc/static/media/la-familia.6c2e2631.jpg","6c2e26319ed31ff5d88a49a127034ca5"],["/menuc/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/menuc/static/media/los-nenes.957b4e2e.jpg","957b4e2e35dedb82d3f99eed92b823ae"],["/menuc/static/media/los-rodriguez.19529712.jpg","19529712078ff41d0b93418f2720db27"],["/menuc/static/media/me-gusta-back-1.5c377929.jpg","5c37792959ef9501e07ad70e493383ee"],["/menuc/static/media/me-gusta-front-1.3a83e15e.jpg","3a83e15edb39d2f800e417c7fb31ba77"],["/menuc/static/media/nostimo-back.5648c696.jpg","5648c6966d873aa24145ab0d20e8ccb6"],["/menuc/static/media/nostimo-front.351bff81.jpg","351bff81ee13ab0b7d356641bbf1a223"],["/menuc/static/media/sanjose-a.43fca47f.jpg","43fca47f4e53d425ed583310627de449"],["/menuc/static/media/sanjose-b.a054c63c.jpg","a054c63cdfa59660296823b1b9a11d2f"],["/menuc/static/media/sanjose-c.890f68d2.jpg","890f68d2e68cd41948254c31dd7a6bb6"],["/menuc/static/media/sanjose-d.1062a80c.jpg","1062a80c5f218edc0e7502dffc3d6f12"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/menuc/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});