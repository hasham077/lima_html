'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "cdc62e828339820ac393a4040314bfe2",
"version.json": "14c165294551554b4eed72d165e204fa",
"favicon.ico": "9c89ffeb2e78bb3249992facaf036525",
"index.html": "9e6930b7418c5f3885e1d6e5bb4101c7",
"/": "9e6930b7418c5f3885e1d6e5bb4101c7",
"apple-touch-icon.png": "5397e4d0c2fc49e0aae605ad22c95205",
"main.dart.js": "95c2686cc43e4542ca1fb1873a07488c",
"icon-192.png": "ee602ade165265417a22c9cdc4353204",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"icon-192-maskable.png": "568cdde218af01ea2c2bba86f037e290",
"icon-512-maskable.png": "bbf1f54e63ea6738b6723e4026f4ee99",
"manifest.json": "ecf51586db3e52ef0bf4edd6116fdecb",
"assets/AssetManifest.json": "20c30eaf4f2fc8ff00651ad73c79b748",
"assets/NOTICES": "55db1ecf83d864d458dda29f9e36ce01",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "4e08ceaad63fc77bd2799d45c316fc25",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "82c426d467bd3820abad8774275eda24",
"assets/fonts/MaterialIcons-Regular.otf": "31c5ea1146eeaddb5f3737aecdaf7e22",
"assets/assets/imgs/onboard12Img.png": "25396cd587a55e009d6f8fe2819b428a",
"assets/assets/imgs/onboard22Img.png": "21e449bd3a01adf2676e033a3546a6cb",
"assets/assets/imgs/onboard13Img.png": "0b5cf1f8104c015e2649db61a0c7aa55",
"assets/assets/imgs/onboard11Img.png": "1f0662519cfbc2f205877111103881a9",
"assets/assets/imgs/splashImg.png": "b0a89b4d690b4a649ccea21d67859196",
"assets/assets/imgs/uploadImg.png": "92b3d839faaac62ed49f237228eae301",
"assets/assets/imgs/verifyEmailImg.png": "59cab38991f38fab9b55d0e92a0c33d9",
"assets/assets/imgs/logo.jpeg": "c492af8ebecdef4ebd178d9f906dd01f",
"assets/assets/imgs/onboard23Img.png": "cb91558ff9811b412eb0552e187748f0",
"assets/assets/imgs/onboard21Img.png": "876acfd0b025b33576ab2b8d9bf5b4e8",
"assets/assets/svgs/editSvg.svg": "089565f82a155a3553ad29290cc0ee78",
"assets/assets/svgs/filterSvg.svg": "5ba2f21b80aa736679c5147c3efa22cf",
"assets/assets/svgs/onHoldSvg.svg": "6a33cd0aa1985294fec94c86ad10ed00",
"assets/assets/svgs/completedSvg.svg": "35245ed63824cbc6fbbe3b9862879989",
"assets/assets/svgs/taskSvg.svg": "a729bd00450469cee32022484875e674",
"assets/assets/svgs/clockSvg.svg": "aa40814917379d2b374125e5e31b141c",
"assets/assets/svgs/clock3Svg.svg": "e9e36efe8aae741618d2ace2f1151d59",
"assets/assets/svgs/notStartedSvg.svg": "7a051d289a30b36be5aab737e5eca6a2",
"assets/assets/svgs/timelineViewSvg.svg": "69fb066b1666cb099a3ae08b89574077",
"assets/assets/svgs/twoStarSVg.svg": "7fb11cd9cfd4f99590bb025c012b671e",
"assets/assets/svgs/stopWatchSvg.svg": "7ff2e115def32f1965af851cad850619",
"assets/assets/svgs/calenderTodaySvg.svg": "fab07f416aad50177089ac3ddc997834",
"assets/assets/svgs/teamSvg.svg": "a762d0161e9fefa70d43d63b8d3193e5",
"assets/assets/svgs/calenderBlackSvg.svg": "fab07f416aad50177089ac3ddc997834",
"assets/assets/svgs/integrationSvg.svg": "ea7024a77747f6919470c6985a02900a",
"assets/assets/svgs/folderSvg.svg": "682469377f1bd45a6ec263b9f4116fd2",
"assets/assets/svgs/treeSvg.svg": "37278d98af577962dbe4976326f2e46d",
"assets/assets/svgs/listViewSvg.svg": "b9f3737c6007be5a554ae408b22020b3",
"assets/assets/svgs/habitSvg.svg": "e2b10471fdd44df035e9d1819f9f1179",
"assets/assets/svgs/addSvg.svg": "4fcd9baf41e5047e8b691a368d561ba9",
"assets/assets/svgs/tagsSvg.svg": "3be52056667c5541d927218213dd3fd4",
"assets/assets/svgs/personAddSvg.svg": "b6c3613028b4641ad132e10689155179",
"assets/assets/svgs/pinFilledSvg.svg": "7afd214ae12504dac3c9943b1ad8dc75",
"assets/assets/svgs/searchSvg.svg": "bbe1594231bb36875cf48d28fe8fc94a",
"assets/assets/svgs/locationMarkerSvg.svg": "d8c58c758fd2744b7d9835cd07546631",
"assets/assets/svgs/reminderSvg.svg": "79cfcfae8a2644f71a5978a8bbb945e5",
"assets/assets/svgs/eventSvg.svg": "500f3c1f397d9eca1431d02231f49e35",
"assets/assets/svgs/pinSvg.svg": "62f1b2d54c05fdcd0d02471d750a578d",
"assets/assets/svgs/moveToSvg.svg": "3182441a8c4902e4b435c179e8a07110",
"assets/assets/svgs/notificationSvg.svg": "1c8b7c0cf102c72ef84fcdaeaf339bfc",
"assets/assets/svgs/micSvg.svg": "d238cd72fa1c40f0d4e0591e832449fc",
"assets/assets/svgs/infoSvg.svg": "cc04dfd74471e65e7a12be12e8995213",
"assets/assets/svgs/likeSvg.svg": "979a6a5bd3b6775002f64721212587ec",
"assets/assets/svgs/archieveSvg.svg": "a7e8d138b121ef941c49e21963beb74e",
"assets/assets/svgs/completedTaskSvg.svg": "104a8a21158e513cc207b38249a36f98",
"assets/assets/svgs/dashboardSvg.svg": "500634d95e2805b81b48b5ba5300d77f",
"assets/assets/svgs/archiveSvg.svg": "d574c9dbef48490221f29eb275dfbbde",
"assets/assets/svgs/doubleArrowLeftSvg.svg": "8d1a8ec5ca2ee549c3ec0ef8aba67f9a",
"assets/assets/svgs/handlerSvg.svg": "681fe849e8eab08cf5df26a207c98789",
"assets/assets/svgs/chatSvg.svg": "38f453f076ca4ec939332520341ba3e1",
"assets/assets/svgs/chatMentionSvg.svg": "b4310d700c8d19c43749084652d9c41f",
"assets/assets/svgs/brightnessSvg.svg": "c71707c0a3928e70ee9b23d8b1b90933",
"assets/assets/svgs/calenderMonthSvg.svg": "1b2b09745cef600ac3dd3c96ec0deaf0",
"assets/assets/svgs/flagSvg.svg": "aee8275d7757853a7033a790ff2d05be",
"assets/assets/svgs/profileCircleSvg.svg": "842d6e15cd3ebc39678aa3fa54dc83b3",
"assets/assets/svgs/linkSvg.svg": "8a5586f5dac339b73276df91e3437f93",
"assets/assets/svgs/emptySvg.svg": "4ec4f9793d884969960d119cb39b1af0",
"assets/assets/svgs/calenderYellowSvg.svg": "5059c7dabae6d7d031b1eebf435b155c",
"assets/assets/svgs/subTreeSvg.svg": "335fb631418c3b331447c340dcbd11eb",
"assets/assets/svgs/gridViewSvg.svg": "65c20eb020cd49e17de0389e1281f56e",
"assets/assets/svgs/blackAiSvg.svg": "f0a28ac06dad14527cbc190a0366bba8",
"assets/assets/svgs/addSectionSvg.svg": "9ddd7cadc7957a4d0fe770dd08cf5912",
"assets/assets/svgs/dashCircleSvg.svg": "26b1fc275874e021fdca933e66907971",
"assets/assets/svgs/reactionSvg.svg": "9c16d17cd7c807ebf690149fe2baf662",
"assets/assets/svgs/goalSvg.svg": "e4ae26e2bd7b808c9e59580e99219550",
"assets/assets/svgs/milestoneSvg.svg": "f89dfaaa8be02a44d479454bd68195d6",
"assets/assets/svgs/onGoingSvg.svg": "60d518ddf130934c71832e8c3d0f623a",
"assets/assets/svgs/repeatSvg.svg": "15355ae854744328fe785e1bc1477ba6",
"assets/assets/svgs/todoSvg.svg": "6afd5cf07e9004ca37e0297777519ab0",
"assets/assets/svgs/micCircleSvg.svg": "519e9de86e1ffe1fd2164325c17f9d62",
"assets/assets/svgs/logoutSvg.svg": "b95f07f6221b982b498a21faa2b4208f",
"assets/assets/svgs/templatesSvg.svg": "72149040680708a02db18b3fffb2a003",
"assets/assets/svgs/fireSvg.svg": "771330d02c4040d05789bfeec7ec6bbf",
"assets/assets/svgs/linkParentTreeSvg.svg": "032f44f75b5ecdd42b308f1b584942be",
"assets/assets/svgs/selectSvg.svg": "3f222c4beed3d590bb6e224d4c6371a7",
"assets/assets/svgs/addFolderSvg.svg": "2cd421f29e63d87a302138a0f4a6ba4a",
"assets/assets/svgs/tomorrowSvg.svg": "01ac874dd7b3a8e4191099fbd75d6017",
"assets/assets/svgs/personSvg.svg": "c0d7c4fa9b7ed5b62033555a3eaba3b6",
"assets/assets/svgs/voiceWaveSvg.svg": "1d1354dc9ba27edcb0df18fca9688c72",
"assets/assets/svgs/aiSvg.svg": "ddcffb341d07a97171c1429b07b83ea9",
"assets/assets/svgs/stockSvg.svg": "beb5d239dcb1dd896a99010cbc5692cc",
"assets/assets/svgs/deleteSvg.svg": "8c02283b10fdb9433ceac744962412a1",
"assets/assets/svgs/goToPageSvg.svg": "728e5b6d59fcc3947a8aa04045492c2d",
"assets/assets/svgs/calenderSvg.svg": "1b2b09745cef600ac3dd3c96ec0deaf0",
"assets/assets/svgs/timeSvg.svg": "7f71cfd5fbaa3612502bd2e324e2c5f2",
"assets/assets/svgs/addWhiteSvg.svg": "b55237ec0b257077a9c7cac2ca6e4c92",
"assets/assets/svgs/checkListSvg.svg": "8fa6b8adc2b9ef972f79fd97cce9fb67",
"assets/assets/svgs/menuSvg.svg": "67daa9e87e2c3349ac74483cb4b1958a",
"assets/assets/svgs/toToPageOutlinedSvg.svg": "a96043e67fe69c8934f9536b030dc571",
"assets/assets/svgs/settingsSvg.svg": "d2a3f5daf0c33451705539e5c841d9af",
"assets/assets/videos/taskVideo.mp4": "3dbc23edbc39317d9d924fea9a8940eb",
"assets/assets/animations/loadingJson.json": "2a7bcaa2c064077cbdca0dc28916887c",
"icon-512.png": "685948eded7ad76a7f51b3cd0113e0fb",
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
