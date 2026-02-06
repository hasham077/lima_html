'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "387215e6d35762007e3efa52bde4cb64",
"version.json": "ce5d2f99e0aefcbd6d00fcfdb9825a71",
"main.dart.js_7.part.js": "d9289dbd00cc6e4806db664457280675",
"favicon.ico": "9c89ffeb2e78bb3249992facaf036525",
"main.dart.js_6.part.js": "4c81a4e9befc02cf56989c7a2c0aa9fe",
"index.html": "6fe643b06a362602302a7e71aaf52a5b",
"/": "6fe643b06a362602302a7e71aaf52a5b",
"apple-touch-icon.png": "5397e4d0c2fc49e0aae605ad22c95205",
"firebase-messaging-sw.js": "e4c319f2a2122050550d7605e9eeb613",
"main.dart.js_11.part.js": "be04a6226b5fcb957fa27d02ef7d9c46",
"main.dart.js": "1a33a97f7d53b53916789349520007fa",
"icon-192.png": "ee602ade165265417a22c9cdc4353204",
"404.html": "147900f5b600ee8639beb65bb6e6a3d9",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"main.dart.js_10.part.js": "a7bbcd6b1fefe10eda83a85e6e4defdc",
"icon-192-maskable.png": "568cdde218af01ea2c2bba86f037e290",
"main.dart.js_5.part.js": "0b41770af4d719cb14b9d96aab8cd171",
"icon-512-maskable.png": "bbf1f54e63ea6738b6723e4026f4ee99",
"main.dart.js_9.part.js": "77017e5c619b4fb2d256f25a876c5ab3",
"main.dart.js_8.part.js": "89a1d945dfd2be258158fbc161633e7d",
"manifest.json": "ecf51586db3e52ef0bf4edd6116fdecb",
"main.dart.js_1.part.js": "d7218803e382e701554128ea57fc270c",
"main.dart.js_3.part.js": "fc9a65fb23002871bda8ba172cfcdc02",
"assets/NOTICES": "9ca7d91f30d61590232024788d97faf9",
"assets/FontManifest.json": "525cff10e86f284d9734e30a8ebe2871",
"assets/AssetManifest.bin.json": "ebc7d1b3aff3e37d269306023893a327",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/timezone/data/latest_all.tzf": "df0e82dd729bbaca78b2aa3fd4efd50d",
"assets/packages/lucide_icons_flutter/assets/lucide.ttf": "84e41fc2e01716302b54aef997166d6f",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w500.ttf": "b11ab4e15408aba3e6283c64062a6186",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w100.ttf": "3832d8f75ae3ed53174cb5aa7e8d68f1",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w300.ttf": "f89319d201d70361f7068e5794762888",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w400.ttf": "a8eb30cbffa7cecbe869b43017dd8c77",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w600.ttf": "54a0d7ac1c09aa367c76a7053de9e8a3",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w200.ttf": "d56ba98ca23492e072fbb35c3915f594",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "6d247986689d283b7e45ccdf7214c2ff",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "0b35edaeaa3f4dd0534dea9540c6b280",
"assets/fonts/MaterialIcons-Regular.otf": "cc1c014d371e6473bf73e1edb7c2129c",
"assets/assets/imgs/onboard12Img.png": "25396cd587a55e009d6f8fe2819b428a",
"assets/assets/imgs/excitedEmojiImg.png": "7b92d989c1f3dff942996466502321f9",
"assets/assets/imgs/okayReationIng.png": "6a0ff84db8e63dd0ba60022fe039aa4d",
"assets/assets/imgs/inProgressStatusImg.png": "30147a3e51da3c2166ec81bda89ff5e1",
"assets/assets/imgs/archieveStatusImg.png": "c6865f84129a694d098b96a6ab5d07bc",
"assets/assets/imgs/awfulReactionImg.png": "807efc289fe0ddcda739d06eec7d3a14",
"assets/assets/imgs/google-calendar.png": "e29e537daeedbd8a9fa624cf389e6ef4",
"assets/assets/imgs/outlook.png": "48b16a1bb115d3abe3526ac945696389",
"assets/assets/imgs/sadReactionImg.png": "bad2050b026bed3782bf1f72be2b6ee9",
"assets/assets/imgs/amazingReactionImg.png": "d26f9b2a8c2e31d5a49a2159a2e21a3b",
"assets/assets/imgs/onboard22Img.png": "21e449bd3a01adf2676e033a3546a6cb",
"assets/assets/imgs/gmail.png": "69e2744942906883623687e7cef6e07c",
"assets/assets/imgs/goodReactionImg.png": "323a49aef65821fe1f09af20f7214b3c",
"assets/assets/imgs/anxiousEmojiImg.png": "1c9700912dfae7e78664970fe4c46b8c",
"assets/assets/imgs/sadEmojiImg.png": "8e609712b1fa183cf280f8b9a189cd23",
"assets/assets/imgs/todoStatusImg.png": "940b190809a34d4d72fe2a9bf739f893",
"assets/assets/imgs/onboard13Img.png": "0b5cf1f8104c015e2649db61a0c7aa55",
"assets/assets/imgs/logo.png": "bebee347767342bd07139cd8c0f7487f",
"assets/assets/imgs/onboard11Img.png": "1f0662519cfbc2f205877111103881a9",
"assets/assets/imgs/splashImg.png": "b0a89b4d690b4a649ccea21d67859196",
"assets/assets/imgs/lifeAreaImg.png": "88d4f24502d66e933be50316a0f2c565",
"assets/assets/imgs/completedStatusImg.png": "830449a93eb3609b062e92d43d6ed833",
"assets/assets/imgs/uploadImg.png": "92b3d839faaac62ed49f237228eae301",
"assets/assets/imgs/verifyEmailImg.png": "59cab38991f38fab9b55d0e92a0c33d9",
"assets/assets/imgs/onboard23Img.png": "cb91558ff9811b412eb0552e187748f0",
"assets/assets/imgs/imap.png": "cd42333437321ddfadbe7c70a688c037",
"assets/assets/imgs/neutralEmojiImg.png": "fac96438b40b04ddd3ff05aa7cdb51c0",
"assets/assets/imgs/onHoldStatusImg.png": "ce30aee2cb99f7932db0135fea187d61",
"assets/assets/imgs/onboard21Img.png": "876acfd0b025b33576ab2b8d9bf5b4e8",
"assets/assets/imgs/happyEmojiImg.png": "e38c2636b6da56b37e4fa2298783b9af",
"assets/assets/svgs/editSvg.svg": "089565f82a155a3553ad29290cc0ee78",
"assets/assets/svgs/filterSvg.svg": "5ba2f21b80aa736679c5147c3efa22cf",
"assets/assets/svgs/onHoldSvg.svg": "6a33cd0aa1985294fec94c86ad10ed00",
"assets/assets/svgs/completedSvg.svg": "35245ed63824cbc6fbbe3b9862879989",
"assets/assets/svgs/taskSvg.svg": "a729bd00450469cee32022484875e674",
"assets/assets/svgs/clockSvg.svg": "aa40814917379d2b374125e5e31b141c",
"assets/assets/svgs/clock3Svg.svg": "e9e36efe8aae741618d2ace2f1151d59",
"assets/assets/svgs/notStartedSvg.svg": "7a051d289a30b36be5aab737e5eca6a2",
"assets/assets/svgs/timelineViewSvg.svg": "441c522f4427c4f6c28c248a8e6e5ca9",
"assets/assets/svgs/reply.svg": "bb331a5c7e9d97c75fc457a340084659",
"assets/assets/svgs/forwardArrowSvg.svg": "31b729f46292652992f8d4d5c6268b5f",
"assets/assets/svgs/twoStarSVg.svg": "7fb11cd9cfd4f99590bb025c012b671e",
"assets/assets/svgs/stopWatchSvg.svg": "7ff2e115def32f1965af851cad850619",
"assets/assets/svgs/calenderTodaySvg.svg": "fab07f416aad50177089ac3ddc997834",
"assets/assets/svgs/teamSvg.svg": "a762d0161e9fefa70d43d63b8d3193e5",
"assets/assets/svgs/Todo.svg": "68094228b5d35b80059f214c600a3828",
"assets/assets/svgs/calenderBlackSvg.svg": "fab07f416aad50177089ac3ddc997834",
"assets/assets/svgs/integrationSvg.svg": "ea7024a77747f6919470c6985a02900a",
"assets/assets/svgs/folderSvg.svg": "682469377f1bd45a6ec263b9f4116fd2",
"assets/assets/svgs/treeSvg.svg": "37278d98af577962dbe4976326f2e46d",
"assets/assets/svgs/rescheduleSvg.svg": "a2126ed2349d9011616e9b0c3d946054",
"assets/assets/svgs/fireStockSvg.svg": "0183974f3e3b0956ba76ce5fa245fc6e",
"assets/assets/svgs/cutSvg.svg": "5ae9968179a0f36cac9f6de9f3da9166",
"assets/assets/svgs/listViewSvg.svg": "b9f3737c6007be5a554ae408b22020b3",
"assets/assets/svgs/habitSvg.svg": "e2b10471fdd44df035e9d1819f9f1179",
"assets/assets/svgs/moodSvg.svg": "933f15ee5c35b5c8cbf7663c30bf48f5",
"assets/assets/svgs/tag.svg": "45661ca846525e0bfc7875aba402e3fe",
"assets/assets/svgs/addSvg.svg": "4fcd9baf41e5047e8b691a368d561ba9",
"assets/assets/svgs/partner.svg": "c0d7c4fa9b7ed5b62033555a3eaba3b6",
"assets/assets/svgs/tagsSvg.svg": "3be52056667c5541d927218213dd3fd4",
"assets/assets/svgs/personAddSvg.svg": "b6c3613028b4641ad132e10689155179",
"assets/assets/svgs/pinFilledSvg.svg": "7afd214ae12504dac3c9943b1ad8dc75",
"assets/assets/svgs/searchSvg.svg": "bbe1594231bb36875cf48d28fe8fc94a",
"assets/assets/svgs/locationMarkerSvg.svg": "d8c58c758fd2744b7d9835cd07546631",
"assets/assets/svgs/reminderSvg.svg": "79cfcfae8a2644f71a5978a8bbb945e5",
"assets/assets/svgs/sendSvg.svg": "bb39af1515f7d067704f5aa9337ff2cb",
"assets/assets/svgs/eventSvg.svg": "500f3c1f397d9eca1431d02231f49e35",
"assets/assets/svgs/normalPrioritySvg.svg": "de1c924217e6164676d5822582d945fa",
"assets/assets/svgs/starSvg.svg": "534243e678f467cd34070546a23a42fa",
"assets/assets/svgs/lifeAreaSvg.svg": "ceebf7e43179677ce369e499f1efaceb",
"assets/assets/svgs/addSubareaSvg.svg": "3a74ea563360567ef1f0264fa7bd0ece",
"assets/assets/svgs/link.svg": "51ce5c567622f9b75d812bd9602bbeba",
"assets/assets/svgs/markAsCompleteSvg.svg": "0c727293ffcf8dfd07eaad49b0b4af7f",
"assets/assets/svgs/copySvg.svg": "19edfbf4cade8e94b5869bd303573fd5",
"assets/assets/svgs/pinSvg.svg": "62f1b2d54c05fdcd0d02471d750a578d",
"assets/assets/svgs/moveToSvg.svg": "3182441a8c4902e4b435c179e8a07110",
"assets/assets/svgs/reminder.svg": "87f3ef3cbb2c428b02f2a31ed5570002",
"assets/assets/svgs/checkCircleSvg.svg": "8a78175e4f0e37854f76ad5fa36bfd8f",
"assets/assets/svgs/mark-read.svg": "b39bef90867f5690d41d315fab54c883",
"assets/assets/svgs/notificationSvg.svg": "1c8b7c0cf102c72ef84fcdaeaf339bfc",
"assets/assets/svgs/urgentPrioritySvg.svg": "bd438bbcd5895f22ef558b1ac43f5c79",
"assets/assets/svgs/micSvg.svg": "d238cd72fa1c40f0d4e0591e832449fc",
"assets/assets/svgs/filter2Svg.svg": "4d4d009355a4ab0f2451047211e4a9a7",
"assets/assets/svgs/infoSvg.svg": "cc04dfd74471e65e7a12be12e8995213",
"assets/assets/svgs/likeSvg.svg": "979a6a5bd3b6775002f64721212587ec",
"assets/assets/svgs/completedTaskSvg.svg": "104a8a21158e513cc207b38249a36f98",
"assets/assets/svgs/cloudUploadSvg.svg": "1f9f2e7a56b009164af4c0d648b558a5",
"assets/assets/svgs/day.svg": "dd31f40d5ccab85f38a68c0c3fb1b04e",
"assets/assets/svgs/priority.svg": "8fcfc76f2467ba08fd442f1f70fe9509",
"assets/assets/svgs/addGoalSvg.svg": "d3466a82328517c204791883057776d2",
"assets/assets/svgs/dashboardSvg.svg": "500634d95e2805b81b48b5ba5300d77f",
"assets/assets/svgs/archiveSvg.svg": "d574c9dbef48490221f29eb275dfbbde",
"assets/assets/svgs/doubleArrowLeftSvg.svg": "8d1a8ec5ca2ee549c3ec0ef8aba67f9a",
"assets/assets/svgs/handlerSvg.svg": "681fe849e8eab08cf5df26a207c98789",
"assets/assets/svgs/mediumPrioritySvg.svg": "d2be226d37bf4e022eb95872beeeb4e0",
"assets/assets/svgs/lowPrioritySvg.svg": "9780c94327ca25a1239adf5ffca1f06a",
"assets/assets/svgs/chatSvg.svg": "38f453f076ca4ec939332520341ba3e1",
"assets/assets/svgs/chatMentionSvg.svg": "b4310d700c8d19c43749084652d9c41f",
"assets/assets/svgs/brightnessSvg.svg": "c71707c0a3928e70ee9b23d8b1b90933",
"assets/assets/svgs/calenderMonthSvg.svg": "1b2b09745cef600ac3dd3c96ec0deaf0",
"assets/assets/svgs/flagSvg.svg": "aee8275d7757853a7033a790ff2d05be",
"assets/assets/svgs/duration.svg": "f06e29a6da659a8633856c31290521d3",
"assets/assets/svgs/highPrioritySvg.svg": "b11238372a06d52e9e74bec3293ea7b3",
"assets/assets/svgs/profileCircleSvg.svg": "842d6e15cd3ebc39678aa3fa54dc83b3",
"assets/assets/svgs/linkSvg.svg": "8a5586f5dac339b73276df91e3437f93",
"assets/assets/svgs/targetSvg.svg": "5af75366049a6222569ff4375afdd22e",
"assets/assets/svgs/botSvg.svg": "f4dabdf73f8f834f6e8aaee00d7224bb",
"assets/assets/svgs/emptySvg.svg": "4ec4f9793d884969960d119cb39b1af0",
"assets/assets/svgs/bellSvg.svg": "b4ad0f6f5a3d8ce7a278fea7f62d2750",
"assets/assets/svgs/calenderYellowSvg.svg": "5059c7dabae6d7d031b1eebf435b155c",
"assets/assets/svgs/subTreeSvg.svg": "335fb631418c3b331447c340dcbd11eb",
"assets/assets/svgs/gridViewSvg.svg": "65c20eb020cd49e17de0389e1281f56e",
"assets/assets/svgs/delete2Svg.svg": "65dc24657d28c24673435573a42b8d4e",
"assets/assets/svgs/addSectionSvg.svg": "9ddd7cadc7957a4d0fe770dd08cf5912",
"assets/assets/svgs/reactionSvg.svg": "9c16d17cd7c807ebf690149fe2baf662",
"assets/assets/svgs/goalSvg.svg": "e4ae26e2bd7b808c9e59580e99219550",
"assets/assets/svgs/milestoneSvg.svg": "f89dfaaa8be02a44d479454bd68195d6",
"assets/assets/svgs/journalSvg.svg": "401253790ec3203036dab5d60aaf5c4e",
"assets/assets/svgs/checkSvg.svg": "308ca916d79da21edf6e46b3b5ae6475",
"assets/assets/svgs/onGoingSvg.svg": "60d518ddf130934c71832e8c3d0f623a",
"assets/assets/svgs/sumationSvg.svg": "92c5753887606d9f24d5cfb6cf01fb78",
"assets/assets/svgs/sparklSvg.svg": "1cfe2f6850cd6e74d4d9aa9686aa1f06",
"assets/assets/svgs/repeatSvg.svg": "15355ae854744328fe785e1bc1477ba6",
"assets/assets/svgs/closeSvg.svg": "8bbdcdb64b5987ec015bb4bedec103ee",
"assets/assets/svgs/todoSvg.svg": "6afd5cf07e9004ca37e0297777519ab0",
"assets/assets/svgs/delete.svg": "513d3c1eee258ce6220d1f52c0e5390f",
"assets/assets/svgs/micCircleSvg.svg": "519e9de86e1ffe1fd2164325c17f9d62",
"assets/assets/svgs/logoutSvg.svg": "b95f07f6221b982b498a21faa2b4208f",
"assets/assets/svgs/templatesSvg.svg": "72149040680708a02db18b3fffb2a003",
"assets/assets/svgs/fireSvg.svg": "771330d02c4040d05789bfeec7ec6bbf",
"assets/assets/svgs/linkParentTreeSvg.svg": "032f44f75b5ecdd42b308f1b584942be",
"assets/assets/svgs/colorCircleSvg.svg": "3d71fba6fdc086022ef54a341e34e83e",
"assets/assets/svgs/emailSvg.svg": "fbc9eddeb5f4c2813b52791c8a973b65",
"assets/assets/svgs/selectSvg.svg": "3f222c4beed3d590bb6e224d4c6371a7",
"assets/assets/svgs/addFolderSvg.svg": "2cd421f29e63d87a302138a0f4a6ba4a",
"assets/assets/svgs/cloudUpload2Svg.svg": "2e2d2873249943e8400ed9eb80463e05",
"assets/assets/svgs/tomorrowSvg.svg": "01ac874dd7b3a8e4191099fbd75d6017",
"assets/assets/svgs/personSvg.svg": "c0d7c4fa9b7ed5b62033555a3eaba3b6",
"assets/assets/svgs/voiceWaveSvg.svg": "1d1354dc9ba27edcb0df18fca9688c72",
"assets/assets/svgs/pasteSvg.svg": "294859b076ba47ef4f407d4e03512d13",
"assets/assets/svgs/aiSvg.svg": "ddcffb341d07a97171c1429b07b83ea9",
"assets/assets/svgs/stockSvg.svg": "beb5d239dcb1dd896a99010cbc5692cc",
"assets/assets/svgs/deleteSvg.svg": "8c02283b10fdb9433ceac744962412a1",
"assets/assets/svgs/goToPageSvg.svg": "728e5b6d59fcc3947a8aa04045492c2d",
"assets/assets/svgs/date.svg": "5a16ab6657892a8761a3f1570ebcf5d1",
"assets/assets/svgs/calenderSvg.svg": "1b2b09745cef600ac3dd3c96ec0deaf0",
"assets/assets/svgs/timeSvg.svg": "7f71cfd5fbaa3612502bd2e324e2c5f2",
"assets/assets/svgs/addWhiteSvg.svg": "b55237ec0b257077a9c7cac2ca6e4c92",
"assets/assets/svgs/checkListSvg.svg": "8fa6b8adc2b9ef972f79fd97cce9fb67",
"assets/assets/svgs/menuSvg.svg": "67daa9e87e2c3349ac74483cb4b1958a",
"assets/assets/svgs/toToPageOutlinedSvg.svg": "a96043e67fe69c8934f9536b030dc571",
"assets/assets/svgs/nextSvg.svg": "02e0c2fef7435dfbba58bdd3454d10c8",
"assets/assets/svgs/closeCircleSvg.svg": "ea3703361ae92601816b59ac714c7bdd",
"assets/assets/svgs/settingsSvg.svg": "d2a3f5daf0c33451705539e5c841d9af",
"assets/assets/svgs/task-cycle.svg": "15355ae854744328fe785e1bc1477ba6",
"assets/assets/svgs/email-opt.svg": "f2c77d110594d65050b66128964b01f6",
"assets/assets/videos/taskVideo.mp4": "3dbc23edbc39317d9d924fea9a8940eb",
"assets/assets/fonts/Arial-Medium.ttf": "b9d1bc34bb319033dfc004342c34b248",
"assets/assets/fonts/Arial-BoldItalic.ttf": "b04eb00031bf4d82265b30855d7a314f",
"assets/assets/fonts/Arial-Light.ttf": "f42d7a6765fb2bec8aaa344fe7340e59",
"assets/assets/fonts/Arial-Regular.ttf": "fa3228aadde0db988e1822c2f736c131",
"assets/assets/fonts/Arial-LightItalic.ttf": "6c2e930c5de7531e110067e694937c0d",
"assets/assets/fonts/Arial-SemiBold.ttf": "7949819274736ad8087206759aa946b5",
"assets/assets/fonts/Arial-SemiBoldItalic.ttf": "1face2f2fd4330d64f283de04da596f7",
"assets/assets/fonts/Arial-Bold.ttf": "858f5a50a4c3e5e6559a0c9b128eee60",
"assets/assets/fonts/Arial-MediumItalic.ttf": "0460ff02cf839e234842adc8a32da3fb",
"assets/assets/fonts/Arial-Italic.ttf": "97f1aa85e8ce271cd2a65759cb230397",
"assets/assets/animations/waveJson.json": "8805ab321d5294bed191b4a82916f3e5",
"assets/assets/animations/loadingJson.json": "2a7bcaa2c064077cbdca0dc28916887c",
"main.dart.js_2.part.js": "16c8803f032105bdc6b7c74fff9f103f",
"icon-512.png": "685948eded7ad76a7f51b3cd0113e0fb",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
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
