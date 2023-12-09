'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "291505d4677f59efb14ede1e59a68716",
"index.html": "73bfe87ce138f14f846219816dbe38a1",
"/": "73bfe87ce138f14f846219816dbe38a1",
"main.dart.js": "c7b421521f4e5c1e3f45532adf5d063d",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "6fa00cd77fd33a0d385ef49ad103d8c2",
"icons/Icon-192.png": "b7d8d10eef2cf87b9b53539f8879c66a",
"icons/Icon-maskable-192.png": "aa661a27b49c771216deb8c71f091bc6",
"icons/Icon-maskable-512.png": "a879641542d57ad0d7457ec53b492aa5",
"icons/Icon-512.png": "abc9d01a0bb18d86195c6053d652f149",
"Minimal-Favicon.png": "0b142f8f8dcc0a90131fab06535a200b",
"manifest.json": "735685e3f20e6391cbda9e9b201bf6ab",
"assets/AssetManifest.json": "02debdc64a21ad2c6011acfdfa98383d",
"assets/NOTICES": "35b33f98e02af8de6b9b1988d1af5fab",
"assets/FontManifest.json": "ee7c6a013caf2fecaa1973598248e72f",
"assets/packages/loading_gifs/assets/images/circular_progress_indicator_small.gif": "502a31bacaa2182d511eb4866354fbab",
"assets/packages/loading_gifs/assets/images/circular_progress_indicator.gif": "ce0141cf86895cf948736c923fa92ade",
"assets/packages/loading_gifs/assets/images/cupertino_activity_indicator.gif": "3990e106caf3029a36788b9b58a86b41",
"assets/packages/loading_gifs/assets/images/cupertino_activity_indicator_small.gif": "05ffb16f4f31cf9941a8295740476ee1",
"assets/packages/loading_gifs/assets/images/placeholder_empty.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"assets/shaders/ink_sparkle.frag": "75db21d9d51e70b9371ed6dba26e0549",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/red-white-and-spritz.jpg": "e9ef45e4a73a6c3bbc1ce44e7d3a0134",
"assets/assets/images/fireman's-martini.jpg": "b0341d3426f20c2ce6a45e368ff54bfd",
"assets/assets/images/tequila-sunrise.jpg": "3652756bf999d11ede30ee5519d2db38",
"assets/assets/images/mugs_side_bw_w1080.jpg": "7ac1959d3b134bbcef006780161606f7",
"assets/assets/images/partly-cloudy.jpg": "c6f4bcffaacc233ffdaa08e39a50451a",
"assets/assets/images/witch's-brew.jpg": "d1be172dd9dabb180d21168192e3a52e",
"assets/assets/images/amaretto-sour.jpg": "e670b110ea86b3a9ffd0cada8b1a44f0",
"assets/assets/images/peeps-mimosa.jpg": "3cfa04bcfc7e68d434371f2386490cbf",
"assets/assets/images/wild-irish-rose.jpg": "862f7db1431879d84fbbf70b2a4523fb",
"assets/assets/images/hurricane.jpg": "887a8f1edf57cd03c825eaa96b9f7b79",
"assets/assets/images/avatar_default.png": "6d7a8d509be59100ec749b9ea8ab81e7",
"assets/assets/images/apple-fool's-martini.jpg": "decfba8f0b46d32c1506f3bded176c4b",
"assets/assets/images/bon-bon.jpg": "a8e6db8d8e8b365ad7d218c88b73f217",
"assets/assets/images/dark-and-stormy.jpg": "8f447922405ad248d2d5f28700850a50",
"assets/assets/images/strawberry-kyiv-mule.jpg": "2e8d1bff974313776cde8938d279a029",
"assets/assets/images/pina-colada.jpg": "bcde9bde7fa950509ebce52b13137a8e",
"assets/assets/images/malibu-wave.jpg": "d6d322d3f8cde1a308d9226ec9fe797b",
"assets/assets/images/joy_note_coffee_eyeglasses_overhead_bw_w1080.jpg": "f014b7b75e442ae187976761117acc17",
"assets/assets/images/cosmo-joe.jpg": "3c1d159919c91dd70bb10da1cc7bbb01",
"assets/assets/images/classic-daiquiri.jpg": "c154c5e04ddba5edbeaa879369408b63",
"assets/assets/images/hermoso.jpg": "420b7113a1136db8342a58adc805a7a3",
"assets/assets/images/manhattan.jpg": "21da3a1a9db296aae6a300d591c4d342",
"assets/assets/images/old-fashioned.jpg": "4dfedbddb0e6ef4777dadeef240f9b63",
"assets/assets/images/coffee_paperclips_pencil_angled_bw_w1080.jpg": "9f499cf53bb008afe9f6bd89deba9c52",
"assets/assets/images/blue-steel.jpg": "873a0d0ad60604ba6f93c01a056c6660",
"assets/assets/images/white-lady.jpg": "8d295bcc6fa8942513170122b2eaf2ba",
"assets/assets/images/bee's-knees.jpg": "17d54edcb98589c0c7493a8c0ec55745",
"assets/assets/images/espresso-martini.jpg": "e9aaa9dcfc9d8e017c320cea471ab0c9",
"assets/assets/images/fitzy.jpg": "8aeac2b726b3984229108311e5729aec",
"assets/assets/images/pearl-harbor.jpg": "8de39db4e589c214a909e0741804977d",
"assets/assets/images/grasshopper.jpg": "a736ebec32e3d548029db9ac00b42fbb",
"assets/assets/images/logo.jpg": "731eb4a565cabd57c0a9939b7df4260e",
"assets/assets/images/last-word.jpg": "f9bf064cc2ffb5e93379295f4b663a25",
"assets/assets/images/paloma.jpg": "a26f6677786b86e0e2087b689cf34ecf",
"assets/assets/images/sarah's-strawberry-slush.jpg": "fb397f35e3839df92972f6faa544fce5",
"assets/assets/images/iphone_cactus_tea_overhead_bw_w1080.jpg": "319249e756f3a470d45841baea9d1132",
"assets/assets/images/old-friend.jpg": "a09486c047dc2d8e876cb36df9607222",
"assets/assets/images/love-note.jpg": "3c19689346781bafa7634781bfabba2f",
"assets/assets/images/cranberry-orange-whiskey-sour.jpg": "849e42a6b4059861cc0c8757cfbdf566",
"assets/assets/images/vodka-collins.jpg": "242d6c11a9205184714957baa6938e07",
"assets/assets/images/japanese-slipper.jpg": "3b5c5bd99881d6d968bc439375409dfe",
"assets/assets/images/paper_flower_overhead_bw_w1080.jpg": "1bed4aefd73a600a585112a77c250a6c",
"assets/assets/images/skeleton-key.jpg": "38278d69396e5544e5fe5207dfc0d3e8",
"assets/assets/images/pumpkin-gin-fizz.jpg": "528a7496784c3a7ef4599348b4f670a4",
"assets/assets/images/typewriter_overhead_bw_w1080.jpg": "39e8f60e5bb2b90a5d801dd4617e7927",
"assets/assets/images/yoly's-marvelous-mojito.jpg": "87418d178b3d0bc3b88a88ad81eb1400",
"assets/assets/files.json": "a335b9c00826ea9e1e5f0170befb998c",
"assets/assets/font/Savoye.ttf": "52afd4d991258876901933696bd3b8f8",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
