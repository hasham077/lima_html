'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e6c8cb8a590873e9cedafef2279a3b39",
"version.json": "14c165294551554b4eed72d165e204fa",
"index.html": "04bd56e603b43e7fa2213fa03dc0a242",
"/": "04bd56e603b43e7fa2213fa03dc0a242",
"main.dart.js": "35e1ac3b777fe31c87a989e91ae09152",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bbefc5bbc00f0dcd51b339cabccf7081",
".git/config": "4a055224febe409182e05e890d5b5801",
".git/objects/92/552cc0ee452b14043db0c488e798dd0fd1ac1f": "69f573e664b5638899e67eb4542fc85c",
".git/objects/50/306d81831876901c69d6690b77915e092de0ac": "68a959193343c02599e99b13a9a03f14",
".git/objects/9b/67f9eb72ef4cded65c85451e631ee69eb81d59": "04565b7297fe9cca28a5a6f776bacf21",
".git/objects/0b/90858e2976a2ebad989b39c52dd13ea68db1ee": "f9d270ad6ce711bc77e3a7ab90ce699d",
".git/objects/34/997ced3e41bcc78c5278366b8e20d8a1f77a65": "8c20d30d474f5a1d81c86421ec3685ae",
".git/objects/33/95487cead62606dc5160701e10984dee30c3c6": "47a077a27b38c67d612b9b2dfeaa9d5d",
".git/objects/05/7130caca815e8d23fc6d338d12cd05a6022cff": "e54fb21d13f28f1b811caed96a680cd8",
".git/objects/b5/419ccaea1577b7fb0c60d49769f58637a21211": "945110d9a591bca278d09d066f4f37ca",
".git/objects/d9/1b42e3d7e8ad0ebeef7752f10a0a14dd14ee28": "e9dc0eb510ba3ef870327ee34cff14f1",
".git/objects/a2/d5a4556f0bc422834b425eee1c46cfe9898d35": "a0bbb783c1c23ddf93525e2022693b48",
".git/objects/a5/b81c57eecaa23d5997883b1801f6ab21ed825a": "1b0d0545e7c98c2d4678ea4cfb8acd1c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/ae/b52a4696f3613550465198a64c6d5f2ab7285b": "e13227909c83f1f0a7eda3bc9130af75",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/c0/1e4419d4f8cbbf253b6984bde4023e19ebcc1a": "b266c675e60f3eefbe1540d1bc213427",
".git/objects/ee/7eecd21283de79813a26da37ec462f5b883bbc": "5c317b59a42f08916ff2024426250550",
".git/objects/c9/d7227eab7b9727da72a8ba7b0fe078453c8dfe": "7291029ba39cffcd8de79f8de09dcd15",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/e3/c87945c7939121d01f4b01e5e88f7f8062ceb0": "a7cb71cb76a237fdb298a4f06db684ce",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "708ec387c1c405170e46ecb742b4d308",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "2950f778d5dda0c267b890b72f9e64de",
".git/objects/4e/f2e297f82c59269ca9a72f8d9b0a310e4c94cb": "6e96a4c38d893422daebda0dec81db51",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "847cef55692aa6311c4c2f26d42b36b5",
".git/objects/89/0070152fb23ea5325e1267b7b68f381be0fa1c": "99b8912dd7692be813900ab289e9c4fd",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "baf057c4b90805f732d24ac22cb10345",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "ebf7d1a0954090a5cf6bdc36cbf3289e",
".git/objects/87/c2c3f9fd1cc865c2c6dacfaf73f9b7e2fc3978": "d0576e4ba26f126fb38f04144ff500e5",
".git/objects/87/c19e30dd74d363382e62afb90f85ee4f60e675": "3aa7ea4ff7fead7aff2a18aba76ac399",
".git/objects/80/f6fc37295cd5ce8e6a13465d4ac43dfde4d31b": "dcde99210c5b19c136b0a36ed88b2f5f",
".git/objects/28/72da2aa65ef736811696d0a1d0ce0ea12aa472": "0f285a4b51ca3a1ac037d96b3ffffd2b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/4d/753096845bcd6433c104fbae1c2d225682c717": "fb554a4e081a74d2328918e2dade4021",
".git/objects/75/a1c0c2566ef062141e11fbddb33ec1dc4b258e": "28d39dd8e0cca86a31b1a7cf5e71d43b",
".git/objects/75/ed900f63adfd406d52c6b266a70ff3c48f16fd": "bad39ac4e18f7733093c189ef17ca03a",
".git/objects/2f/8838bf8c4988a0a4f54247162d679b33c659ea": "7f2ff7f91e31bf80c27a0bef5ff7e0d6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/91/5036c36960ba11ce5f721b23c956960d48a9ac": "02a0c5e232606ecabbe147c2626cc92d",
".git/objects/62/961c6cba619c430304dff8d736f8e287e0bf84": "abd379cbf7301373d4851e8469db3c70",
".git/objects/3f/8b2bdbeef05b2339f21bb461aa78abc7303328": "58c5446c1757d0859464201f06224105",
".git/objects/6d/546c097acba424138ea01e5849839bc40fcbc6": "dc1bc7b68b85608968abb0d2cf483ef5",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "bcafa311bebf5634eaebc9a830559b6e",
".git/objects/06/b8ed66ed82fddc95132a1d8742d6f47dd5b3a3": "c99aba83ffc13e4b3dea5e81deea5055",
".git/objects/06/b81d418d43d5590efbefbc13b9f02c9ad0e03f": "9ff6e52c0c47b926a6cc995eff5b759d",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "bf78de9a46b3f184061cc620c3ed1316",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "bbebac4a2c902f61cd432f1208897318",
".git/objects/bf/22e368c68d8e53c50303bd429402df4ad5022f": "08529ffecfc7046b837445a6f627c91a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "5523d4e8db4b01938143b79a2a707ffd",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "05f6258e74434f94977ac333a3891eeb",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "2c236ea17ad6b309081e0a5251137b84",
".git/objects/a9/3b8dfd251fa4862cbf1a443546e765d3e9232f": "9fa0de633a80be0f361dc0c2bad487f5",
".git/objects/d2/e35ba7310f6f04f378584211e97021dcf55b9d": "be393aca80b14359e02ba944af9c2288",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "7f7a35d97b21f578a6e3dfc95f936101",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b0/f543a0200767f5ee3dcc24fdc9f1d29ffc1838": "ee6c8a4159b8072a6feea959ca1a78de",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "31782b0e3547365a9cae9df3a3668159",
".git/objects/c3/dad6685d687477c66530ea62d153fad7f14121": "3f6a2435ba8d33b1319d8d0e814d23d2",
".git/objects/f9/6a61bb2b16af3235674b44559bd1e54be7d08c": "6c1a03f14d89886c1fb992b25a645825",
".git/objects/f1/f610fc0c4737fd655f931159d4a7863f9a0015": "f3173796f3115a3023d27402d39cf68a",
".git/objects/f8/fae62a38bdd199ccdc8d493bc07bb0d7c80594": "d2cfe9328839729d1ae31efb48152493",
".git/objects/e0/d21b0982d3c6c71ad21ddef1c7ad89336ed39e": "1f62fe2d6de44c62498d16ceafc8608d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/2d/7661dae83a070addff047d4db105e41aead2ea": "920e1dfb978e7df967a7a3dee62f2040",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "a398f69e713b316e8215482884ad37cd",
".git/objects/48/5978a334ac7c0d97573f23b2a5dea170a3ab4b": "d31f309b36c66f60bc3c7fbdc28c0948",
".git/objects/4f/d8dae91ec16d009e72fcf18ac94b03968a7ec6": "c3639106465cdff9e423d5503cbd553e",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "c3c094af00829b8acfa443209cc2f39d",
".git/objects/12/48d1a322a5fd403c5220e5888a85a0105746fa": "499c9ab344d8204506cf76752d45d94b",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "0a804c6a015be41c2f1307e32bf6b5bc",
".git/objects/76/97a6c28c2c7ebcfbd649abe2f9501f0a03bbe5": "8309634906a6bc6ee7a3a196198bd12d",
".git/objects/8b/b8ead0c1ef36a90f4f6338eeb741b794713650": "ceb84b3d23b92e83dbad6be32174af98",
".git/objects/13/5d991293046b681eea4e0bbf90f66a219e9922": "292114efc177b84da36607fbef500c6e",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "96e3285980ba51fe6eaf0295fd60ff80",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "270622d24691943f7f7a93ef66237849",
".git/logs/refs/heads/main": "270622d24691943f7f7a93ef66237849",
".git/logs/refs/remotes/origin/HEAD": "78b2bc4b7ec013beba3f7ba0405c24f0",
".git/logs/refs/remotes/origin/main": "18e9ca022a87a414aa0f4ef365cdf960",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "693e19e0aa0d1146c8dc4a87c391c384",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "693e19e0aa0d1146c8dc4a87c391c384",
".git/index": "cd6decadc8faa4b3f5b5dbfba42c6b1f",
".git/COMMIT_EDITMSG": "a0180b010d2997feccec77c94ab2273f",
".git/FETCH_HEAD": "91b7c88730a91d6ec81ee7a9b6ac890c",
"assets/AssetManifest.json": "82ca0dc4a75b2708b9ca7a69a17c8998",
"assets/NOTICES": "56ead5ddd8a54a71dfe65bff2d1a2269",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "4bf9e578e4b7414eb5cb8045bf38d3e2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "0733383a06d01921b70b34773102e494",
"assets/fonts/MaterialIcons-Regular.otf": "6b73576f70f6456161683e09a6b4d19b",
"assets/assets/imgs/onboard12Img.png": "25396cd587a55e009d6f8fe2819b428a",
"assets/assets/imgs/onboard22Img.png": "21e449bd3a01adf2676e033a3546a6cb",
"assets/assets/imgs/onboard13Img.png": "0b5cf1f8104c015e2649db61a0c7aa55",
"assets/assets/imgs/onboard11Img.png": "1f0662519cfbc2f205877111103881a9",
"assets/assets/imgs/splashImg.png": "b0a89b4d690b4a649ccea21d67859196",
"assets/assets/imgs/verifyEmailImg.png": "59cab38991f38fab9b55d0e92a0c33d9",
"assets/assets/imgs/onboard23Img.png": "cb91558ff9811b412eb0552e187748f0",
"assets/assets/imgs/onboard21Img.png": "876acfd0b025b33576ab2b8d9bf5b4e8",
"assets/assets/videos/taskVideo.mp4": "3dbc23edbc39317d9d924fea9a8940eb",
"assets/assets/animations/loadingJson.json": "2a7bcaa2c064077cbdca0dc28916887c",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
