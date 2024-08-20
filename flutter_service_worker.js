'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7bed38ca853e2f035494e02a0706bc44",
"version.json": "b957d44fc4b182259cd2a1434429d75d",
"index.html": "cc9c1ab0aca9b83b99ccc1301c4d4ad5",
"/": "cc9c1ab0aca9b83b99ccc1301c4d4ad5",
"main.dart.js": "15d307b048b2f15d9075c9b8a66544d6",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "48c8953992acb32732a1e6ca7626d95c",
"assets/AssetManifest.json": "bb3e94bbc17d2cdf43433845894370cb",
"assets/NOTICES": "464a624f10e9a37f225d935e6dbdb08d",
"assets/FontManifest.json": "5afb8d7c53784c6af840f8e84fd1bc67",
"assets/AssetManifest.bin.json": "9228004dfc6b651bb35e409a819ae78b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "5e4af5599767b9dcaa389daf84bfc821",
"assets/fonts/MaterialIcons-Regular.otf": "a6060f79bfbb9f417175421943e68bc9",
"assets/assets/power.svg": "9781368459edf1c331be70ce3d689ad0",
"assets/assets/%25E7%25B6%25AD%25E4%25BF%25AE%25E6%25A8%2581.jpg": "49e263f50c6f5aec6828a406e00f41e3",
"assets/assets/bike.jpg": "77ea2d95cfdf74975bb351af57f64239",
"assets/assets/%25E4%25BC%25B8%25E7%25B8%25AE%25E7%25B8%25AB.png": "e8f292f1d1cf6c523894ff253cd8c71d",
"assets/assets/map/dcr9.png": "e0fc697cea8cf49888aaf3a12fea7062",
"assets/assets/map/dcr8.png": "30d9566ff50ca65e19f664702d0af1d6",
"assets/assets/map/dcr19.png": "6661bd40ccc890c4d81e6c6d1ca87175",
"assets/assets/map/dcr18.png": "9d65abc0254ab150535fe18127d7cdb5",
"assets/assets/map/8.png": "47a18040d929cabe8dd1eab5977671ec",
"assets/assets/map/9.png": "6d451f52947b2e8bdb98861f8f55ece1",
"assets/assets/map/14.png": "5ae35c9890b88060d7be0016a38c86a4",
"assets/assets/map/28.png": "ef487bfcebaa50cde90288f88f3e5154",
"assets/assets/map/29.png": "7996d31472047ce03233f840b9b20e3c",
"assets/assets/map/15.png": "91f88ca75d07242c6a23c4f8313fa141",
"assets/assets/map/17.png": "d97eb4db2c2d3473d1cad66a42e409d8",
"assets/assets/map/16.png": "bbc3860b2fb81c18c4644659621bb539",
"assets/assets/map/12.png": "857ca7b24b740a72001431aabbad5265",
"assets/assets/map/13.png": "8d084bf9c0c7f7e3dcab4f7fda2603dc",
"assets/assets/map/11.png": "afe4c311d9eefd816ebca94065a295b0",
"assets/assets/map/10.png": "0f56ccd1d97b616b9aadf7e6ec900b6c",
"assets/assets/map/21.png": "d20f887405365ac7bf426c3c4d769a6e",
"assets/assets/map/20.png": "37a0c814ded88aafa71d32a560078cc9",
"assets/assets/map/22.png": "0ba5313f69eb1c94706bf76e28e87b28",
"assets/assets/map/23.png": "c19211330c57b76fb7232cdb2c9ba129",
"assets/assets/map/27.png": "00a43d69d5cdc27e3031085f6a6e65d0",
"assets/assets/map/32.png": "2880c3d4be86632fc0f05ce176ac29d2",
"assets/assets/map/26.png": "c45cb40f1cb0e8a5860e44724d7d53f7",
"assets/assets/map/18.png": "db936fac75c02aebc0dd35ba25ba4864",
"assets/assets/map/30.png": "a9d339a15e135f0aaadaacf19de31bb3",
"assets/assets/map/24.png": "60f9d7f0db79538ec0b8f9a48ebe9377",
"assets/assets/map/25.png": "71ce7c04ed9b0731de5e03cb35f62a3c",
"assets/assets/map/31.png": "3d178fcc4f9d4b2c4da8215b5d71be25",
"assets/assets/map/19.png": "a9d339a15e135f0aaadaacf19de31bb3",
"assets/assets/map/4.png": "cf56e212d3efb2165c5b885917676c03",
"assets/assets/map/dcr16.png": "1d04a6dbb9c2246d45e52b24960a6e3a",
"assets/assets/map/dcr0.png": "c628cf18b7764aeb1c7665db1542e434",
"assets/assets/map/dcr1.png": "644696a7cbe410152918c68a279725b5",
"assets/assets/map/dcr17.png": "33b8f89f17a09ba7d70a28efe1c95b24",
"assets/assets/map/5.png": "fd984a3c2fd63ece5a324864eaed30e6",
"assets/assets/map/dcr15.png": "d02edeccf3c9d181c41220effcca6bef",
"assets/assets/map/7.png": "612e3a0332ee7c35cedba0b5e0d6c0d9",
"assets/assets/map/dcr3.png": "cd4744551609500c6c8d8ae5451b8e53",
"assets/assets/map/dcr2.png": "cbd064c62163a95f9d6f6e8caa6b899b",
"assets/assets/map/6.png": "1471893e16883299457a650dc8139d20",
"assets/assets/map/dcr14.png": "d0e0066178afa4ed4d21b7baac89443f",
"assets/assets/map/dcr10.png": "d3e362560dee31e9b99827c4b66b0837",
"assets/assets/map/2.png": "9a9563f5b5cfab6dfe97096a3adf5f30",
"assets/assets/map/dcr6.png": "2a1d9cd1516d1152a4e5463b63cca3dd",
"assets/assets/map/dcr7.png": "b51c92c80ba96546ea2f8cc36afc1ff2",
"assets/assets/map/3.png": "8b3bac5659d4d2ec5410a71b04fcf071",
"assets/assets/map/dcr11.png": "9d9acc6e692f354c9aa15fc1c8e15ad2",
"assets/assets/map/1.png": "319a391de08ad1d6df7c3861dd8b8c97",
"assets/assets/map/dcr13.png": "58f3aa9f9b1ec2e6219dc0e335f4fd66",
"assets/assets/map/dcr5.png": "4a8259c251d3a939ba0a82f6cfd94790",
"assets/assets/map/dcr4.png": "7b34bd50db7f932597bb5b2e1d225658",
"assets/assets/map/dcr12.png": "4cd305abbfabf8aaa5b84d9a110ddfbd",
"assets/assets/map/0.png": "50624e47b2e6e11e8a9a77afd09a56f1",
"assets/assets/fonts/msjh.ttf": "beb9c7fbbda025a461d5331084e87624",
"assets/assets/event_guild_2.png": "aa442883737c6b356b6e21fc5e15ac6f",
"assets/assets/%25E8%25BB%258A%25E9%2598%25BB.png": "15eb9b031c3a88c26e36c6561afc8cf1",
"assets/assets/event_guild_1.png": "5fe0e3ddcb39d22efa48ed0b968efa7d",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
