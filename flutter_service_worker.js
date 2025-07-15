'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2500b03a8da40730e90cff3615e34353",
"version.json": "14c165294551554b4eed72d165e204fa",
"index.html": "04bd56e603b43e7fa2213fa03dc0a242",
"/": "04bd56e603b43e7fa2213fa03dc0a242",
"main.dart.js": "445be5fa4f7f1ca1190d78c6cae1c584",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bbefc5bbc00f0dcd51b339cabccf7081",
".git/config": "4a055224febe409182e05e890d5b5801",
".git/objects/0d/715b0bb2222005f4ef7a7f494b940169c00194": "72804ad4b90070ef736d624a12c25d62",
".git/objects/95/2ca756fddad12c764ed14551c6361004b72732": "1f0e653577ad2d5c7817b070f7749c5b",
".git/objects/92/552cc0ee452b14043db0c488e798dd0fd1ac1f": "69f573e664b5638899e67eb4542fc85c",
".git/objects/50/306d81831876901c69d6690b77915e092de0ac": "68a959193343c02599e99b13a9a03f14",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "4643131532bd21681468718600b3fdcf",
".git/objects/68/513b791808bf52612e573e3c198344e3c173c0": "1545844ca671e49a8cdfe3a16374d522",
".git/objects/57/408710896a830659dfc6e2eea6d66d5ece33bf": "8302f2d1047ca22249f16a26e59d1f29",
".git/objects/9b/67f9eb72ef4cded65c85451e631ee69eb81d59": "04565b7297fe9cca28a5a6f776bacf21",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "a5ab4a345a37d6f24f2325aa56fbd1ef",
".git/objects/35/7422926d9e2995198bab0205b59bdda318f497": "99ac7e7397524fcb4894f1d474699539",
".git/objects/35/1b8c43b0b60db95bfa8388c39f0d215cc05ac6": "fe4683a33c84aeb14de1787e5b0f9a65",
".git/objects/3c/3c71fd2239e84f82192dda7fbae57730165270": "8ee1651e86ea3c50473f301a67b0e185",
".git/objects/58/54c03f02dfbf147ad531a329d6c7ea74495df3": "3a1e368536458f1b6841bf015d665763",
".git/objects/0b/90858e2976a2ebad989b39c52dd13ea68db1ee": "f9d270ad6ce711bc77e3a7ab90ce699d",
".git/objects/0e/5a49cf15ee70bd2416365ef93aa1a6ff29857c": "cb253b9a65347b75920bb92d926c0acb",
".git/objects/34/1f85c1408b3cc694aa564d58949d5134f53251": "ab09e6d21b27e71cb86be44842f9c038",
".git/objects/34/997ced3e41bcc78c5278366b8e20d8a1f77a65": "8c20d30d474f5a1d81c86421ec3685ae",
".git/objects/33/95487cead62606dc5160701e10984dee30c3c6": "47a077a27b38c67d612b9b2dfeaa9d5d",
".git/objects/05/7130caca815e8d23fc6d338d12cd05a6022cff": "e54fb21d13f28f1b811caed96a680cd8",
".git/objects/02/c29ca85fff85e65b2abd4fae9d7bb56ca115b9": "2e9788b22f90a399660b7ff90dcfc67b",
".git/objects/b5/419ccaea1577b7fb0c60d49769f58637a21211": "945110d9a591bca278d09d066f4f37ca",
".git/objects/d9/1b42e3d7e8ad0ebeef7752f10a0a14dd14ee28": "e9dc0eb510ba3ef870327ee34cff14f1",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "6dd3aa7909b7bea70e523e4a9c9861cc",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "4f6d7d5a9dcde6a00e4fa30f4bc76179",
".git/objects/a2/d5a4556f0bc422834b425eee1c46cfe9898d35": "a0bbb783c1c23ddf93525e2022693b48",
".git/objects/a5/b81c57eecaa23d5997883b1801f6ab21ed825a": "1b0d0545e7c98c2d4678ea4cfb8acd1c",
".git/objects/d6/baf2f42bc167efe18dd4ff6194238f9cce76d3": "5e3ab0ce40b2d65c5f8b5b0f8d561d99",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/bc/746b49ab822f7a6dfb4e5b5df931a65b3b128f": "a4327d782350a0c741bfac0a55b543ce",
".git/objects/ae/b52a4696f3613550465198a64c6d5f2ab7285b": "e13227909c83f1f0a7eda3bc9130af75",
".git/objects/e5/2426132bc2ffd3b1fdd787d41298c426a143d8": "ff62dcfd233d03a8827d02267010380a",
".git/objects/e2/48d914ca8d6d067e69881a4dfb193e6603920d": "3a39913262d1c41fc1bc89a2ef38552d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/c7/24cde35cafc78f7fce1e30b75402faa47df8b5": "4da219b464015f2b0f048df43226c521",
".git/objects/c7/2948f0c55b22fcfaf9c0ba201a2e1b97df863f": "e38d0bd12a5fca2aca651b6bf3110f7f",
".git/objects/c0/1e4419d4f8cbbf253b6984bde4023e19ebcc1a": "b266c675e60f3eefbe1540d1bc213427",
".git/objects/ee/7eecd21283de79813a26da37ec462f5b883bbc": "5c317b59a42f08916ff2024426250550",
".git/objects/c9/d7227eab7b9727da72a8ba7b0fe078453c8dfe": "7291029ba39cffcd8de79f8de09dcd15",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/e3/c87945c7939121d01f4b01e5e88f7f8062ceb0": "a7cb71cb76a237fdb298a4f06db684ce",
".git/objects/c8/c9eb3ee7f5ae54289136a508700fc4b1f1d702": "5250d802f82ed1cf9ac9b50179273689",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "708ec387c1c405170e46ecb742b4d308",
".git/objects/c6/1a46e275fd26e0ed30b77bd6a7e6dbec03a874": "17090ad7af4f9c297ee0c8738d6cf98c",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "2950f778d5dda0c267b890b72f9e64de",
".git/objects/4e/f2e297f82c59269ca9a72f8d9b0a310e4c94cb": "6e96a4c38d893422daebda0dec81db51",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "847cef55692aa6311c4c2f26d42b36b5",
".git/objects/7c/b483ba23384b17fce559c3ed872919c3fbac18": "1066d07777cfe672679ab4d0efca9d9c",
".git/objects/89/0070152fb23ea5325e1267b7b68f381be0fa1c": "99b8912dd7692be813900ab289e9c4fd",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "baf057c4b90805f732d24ac22cb10345",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "ebf7d1a0954090a5cf6bdc36cbf3289e",
".git/objects/87/c2c3f9fd1cc865c2c6dacfaf73f9b7e2fc3978": "d0576e4ba26f126fb38f04144ff500e5",
".git/objects/87/c19e30dd74d363382e62afb90f85ee4f60e675": "3aa7ea4ff7fead7aff2a18aba76ac399",
".git/objects/80/f6fc37295cd5ce8e6a13465d4ac43dfde4d31b": "dcde99210c5b19c136b0a36ed88b2f5f",
".git/objects/28/72da2aa65ef736811696d0a1d0ce0ea12aa472": "0f285a4b51ca3a1ac037d96b3ffffd2b",
".git/objects/7b/5a20d90babf3eb8c91711d95c68713e8c1b4fe": "b15fe48b4f6441febac22350a5d1d7a8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/4c/9342993a6aa3c10d48a317844b7a3c4bea8294": "de218606151a13c9e7414c6b294714ac",
".git/objects/4d/753096845bcd6433c104fbae1c2d225682c717": "fb554a4e081a74d2328918e2dade4021",
".git/objects/75/a1c0c2566ef062141e11fbddb33ec1dc4b258e": "28d39dd8e0cca86a31b1a7cf5e71d43b",
".git/objects/75/ed900f63adfd406d52c6b266a70ff3c48f16fd": "bad39ac4e18f7733093c189ef17ca03a",
".git/objects/81/6121ddd0f1a00faca83c7e7ce4b0a42f51ab9d": "6fe8514f3bc8a09a0c513003fb6891d5",
".git/objects/86/e9144eb17743cb02297cee5688001bffd320f7": "eeb745094c92337b517a0a0209822cc3",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "7dc6862ccf9cf08361bcdcaa506b8cab",
".git/objects/2a/8775c1978306af7eefbb2d10b36a401e4005fd": "f322a27fadc6abb7a5027ef84833b736",
".git/objects/2f/8838bf8c4988a0a4f54247162d679b33c659ea": "7f2ff7f91e31bf80c27a0bef5ff7e0d6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "cedd036902896227217e1fe4c1f5af01",
".git/objects/07/7ffb8a26f7d9f90cf7486e3327bf482060e2eb": "e8f62c95a1f14fc63cd08034f87dc30c",
".git/objects/91/5036c36960ba11ce5f721b23c956960d48a9ac": "02a0c5e232606ecabbe147c2626cc92d",
".git/objects/65/65a01a403e9cb6ca54c9f9c16659ef22838bb4": "ec4cf19117334207da110badded02550",
".git/objects/62/961c6cba619c430304dff8d736f8e287e0bf84": "abd379cbf7301373d4851e8469db3c70",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "3ae74c50121a252af7b735f48bed9193",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "8601fe5ad3c9535b9cb71142f3ee4c08",
".git/objects/98/612eb4c7cb22dfd99c3dead91f7f35ac87c82c": "5ff7a6908706fe4258578ac08538f14f",
".git/objects/3f/8b2bdbeef05b2339f21bb461aa78abc7303328": "58c5446c1757d0859464201f06224105",
".git/objects/3f/75beffcb985467ee81da65ed7a51caf5e4ccba": "55cf9026d65aa0471c0e365f07f7f1cb",
".git/objects/08/6e24b5b30bcd1f87f1ba8e6a914405221bbc45": "748d06c6e221b19604eea6ac167aae61",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "6ba60eff6a71de7a55ea52c6181fc6b8",
".git/objects/6d/546c097acba424138ea01e5849839bc40fcbc6": "dc1bc7b68b85608968abb0d2cf483ef5",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "bcafa311bebf5634eaebc9a830559b6e",
".git/objects/06/b8ed66ed82fddc95132a1d8742d6f47dd5b3a3": "c99aba83ffc13e4b3dea5e81deea5055",
".git/objects/06/e1df007b982bab320ab58ba719a1117fc8d498": "1f6514a92e6abd30a18b56ea81124a65",
".git/objects/06/b81d418d43d5590efbefbc13b9f02c9ad0e03f": "9ff6e52c0c47b926a6cc995eff5b759d",
".git/objects/55/a5ba76672fdf6d597c8db939ed636a14d48759": "d9c701642e73f2ef6b0b7ffc7768c74c",
".git/objects/55/7795eda249d34de1351c03a990f878b8a3b655": "28902c797dc2944f5f87102e69cfed71",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "bf78de9a46b3f184061cc620c3ed1316",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "bbebac4a2c902f61cd432f1208897318",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "541ccecb00d45c9fdc9852f95fcdad75",
".git/objects/bf/22e368c68d8e53c50303bd429402df4ad5022f": "08529ffecfc7046b837445a6f627c91a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "5523d4e8db4b01938143b79a2a707ffd",
".git/objects/a7/dba1338de954faa0f840832e6c7587492a7b41": "f88fe7b8eec2e3e7ed5b30e663d3c89d",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "05f6258e74434f94977ac333a3891eeb",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "2c236ea17ad6b309081e0a5251137b84",
".git/objects/dd/a468047b49ee461f92e572b1a5d65d9eda49dd": "a28283a41b3651b5ab97474284154bb8",
".git/objects/a9/3b8dfd251fa4862cbf1a443546e765d3e9232f": "9fa0de633a80be0f361dc0c2bad487f5",
".git/objects/a9/c6d04f0d2577cd2740b767b66f5f9064d967ce": "0c0320681b6eb829798a2bd17c25c037",
".git/objects/d5/047ae31777b2b6efec85ca8b21e4259308c3bd": "612150f2f6ccb111b75b20a37dbf4059",
".git/objects/d2/e35ba7310f6f04f378584211e97021dcf55b9d": "be393aca80b14359e02ba944af9c2288",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "7f7a35d97b21f578a6e3dfc95f936101",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/a8/b20ad630aee3831be35cded6a523914b625b55": "21e83282322948ed2dbeedaade36022c",
".git/objects/b0/f543a0200767f5ee3dcc24fdc9f1d29ffc1838": "ee6c8a4159b8072a6feea959ca1a78de",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "31782b0e3547365a9cae9df3a3668159",
".git/objects/c3/dad6685d687477c66530ea62d153fad7f14121": "3f6a2435ba8d33b1319d8d0e814d23d2",
".git/objects/e1/18aa0e57abdf78affd7bbf2b1e827ddba7f1dd": "1bd0ff251300378fab5afe7dca39a79a",
".git/objects/e1/8c0dc41a90a446f8361ed8dc59373dc704ccbe": "8bb5a0aa4917749b63db689d1e149b2d",
".git/objects/f9/6a61bb2b16af3235674b44559bd1e54be7d08c": "6c1a03f14d89886c1fb992b25a645825",
".git/objects/f9/093d2433c7baf4a530b204fc103ef003f3b1e6": "1fba39096082a5db05e0d906ad3b1c78",
".git/objects/f9/5220e6764d041080cc8ad832f29d1cbb6a7a5c": "44e4fb1527941f7f7c282cd65ff9ad94",
".git/objects/ff/478b41cc90de8f0bf7c72afd52ae8fb3a90a52": "95cb22fe3fe9d074371544c2bef199ae",
".git/objects/c2/9ccf310d2d1e632eb5c2f3897f3e1e4e413a29": "6a3d02b3ddfd077361e8f6c4464d0685",
".git/objects/f1/f610fc0c4737fd655f931159d4a7863f9a0015": "f3173796f3115a3023d27402d39cf68a",
".git/objects/f8/fae62a38bdd199ccdc8d493bc07bb0d7c80594": "d2cfe9328839729d1ae31efb48152493",
".git/objects/e0/d21b0982d3c6c71ad21ddef1c7ad89336ed39e": "1f62fe2d6de44c62498d16ceafc8608d",
".git/objects/e0/33e7477f8158ef4c3421209a8c26b2ddfe9d0a": "957c20764e871187280d8ba369f0e352",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/2d/7661dae83a070addff047d4db105e41aead2ea": "920e1dfb978e7df967a7a3dee62f2040",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "a398f69e713b316e8215482884ad37cd",
".git/objects/48/5978a334ac7c0d97573f23b2a5dea170a3ab4b": "d31f309b36c66f60bc3c7fbdc28c0948",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "a1eb710863406c04c5e7b061f2e96af9",
".git/objects/4f/d8dae91ec16d009e72fcf18ac94b03968a7ec6": "c3639106465cdff9e423d5503cbd553e",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "c3c094af00829b8acfa443209cc2f39d",
".git/objects/8d/149163f77f9692acd5639a472e2fa6248576c7": "b8b2a6fdf9c6c237e9ef2794efc96cb8",
".git/objects/12/48d1a322a5fd403c5220e5888a85a0105746fa": "499c9ab344d8204506cf76752d45d94b",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "0a804c6a015be41c2f1307e32bf6b5bc",
".git/objects/76/97a6c28c2c7ebcfbd649abe2f9501f0a03bbe5": "8309634906a6bc6ee7a3a196198bd12d",
".git/objects/82/cb76d7a53b81d022e7e038ab6ca929427e880d": "8832f57c53d9eb2f02c4e9afe0248041",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "b8d6f15ef784ef37473a3264834abc7d",
".git/objects/8b/b8ead0c1ef36a90f4f6338eeb741b794713650": "ceb84b3d23b92e83dbad6be32174af98",
".git/objects/13/5d991293046b681eea4e0bbf90f66a219e9922": "292114efc177b84da36607fbef500c6e",
".git/objects/8e/af83caffa07a10ddead2e942270f97db5b17a2": "30880571cdb47796d80fca97f0a11956",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "96e3285980ba51fe6eaf0295fd60ff80",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ce3efc258b87c48b271034c32b3a53a8",
".git/logs/refs/heads/main": "ce3efc258b87c48b271034c32b3a53a8",
".git/logs/refs/remotes/origin/HEAD": "4e51d4f02c4bc442d11fa25fed506335",
".git/logs/refs/remotes/origin/main": "86e2cbae21158a67f640be69b393a36a",
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
".git/refs/heads/main": "29e7145be3a192c6d36cb1cb163fa63f",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "29e7145be3a192c6d36cb1cb163fa63f",
".git/index": "18e204fffaac3570aaf4acc390d543e6",
".git/COMMIT_EDITMSG": "375ace9494dd930d04a94a19ecaae52a",
".git/FETCH_HEAD": "474f4bd33e1de24cc60159a15b4b1def",
"assets/AssetManifest.json": "8005e3c94f4a64980002ef6b67a763d8",
"assets/NOTICES": "56ead5ddd8a54a71dfe65bff2d1a2269",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "96333d99215ae0c75e94fd140a61a5e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "82a16c5024a968623340a45a028cb0a6",
"assets/fonts/MaterialIcons-Regular.otf": "40ff5f7e87a1684b75af2546140b106f",
"assets/assets/imgs/onboard12Img.png": "25396cd587a55e009d6f8fe2819b428a",
"assets/assets/imgs/onboard22Img.png": "21e449bd3a01adf2676e033a3546a6cb",
"assets/assets/imgs/onboard13Img.png": "0b5cf1f8104c015e2649db61a0c7aa55",
"assets/assets/imgs/onboard11Img.png": "1f0662519cfbc2f205877111103881a9",
"assets/assets/imgs/splashImg.png": "b0a89b4d690b4a649ccea21d67859196",
"assets/assets/imgs/uploadImg.png": "92b3d839faaac62ed49f237228eae301",
"assets/assets/imgs/verifyEmailImg.png": "59cab38991f38fab9b55d0e92a0c33d9",
"assets/assets/imgs/onboard23Img.png": "cb91558ff9811b412eb0552e187748f0",
"assets/assets/imgs/onboard21Img.png": "876acfd0b025b33576ab2b8d9bf5b4e8",
"assets/assets/svgs/taskSvg.svg": "a729bd00450469cee32022484875e674",
"assets/assets/svgs/timelineViewSvg.svg": "69fb066b1666cb099a3ae08b89574077",
"assets/assets/svgs/teamSvg.svg": "a762d0161e9fefa70d43d63b8d3193e5",
"assets/assets/svgs/folderSvg.svg": "682469377f1bd45a6ec263b9f4116fd2",
"assets/assets/svgs/listViewSvg.svg": "b9f3737c6007be5a554ae408b22020b3",
"assets/assets/svgs/habitSvg.svg": "e2b10471fdd44df035e9d1819f9f1179",
"assets/assets/svgs/addSvg.svg": "4fcd9baf41e5047e8b691a368d561ba9",
"assets/assets/svgs/tagsSvg.svg": "3be52056667c5541d927218213dd3fd4",
"assets/assets/svgs/personAddSvg.svg": "b6c3613028b4641ad132e10689155179",
"assets/assets/svgs/searchSvg.svg": "bbe1594231bb36875cf48d28fe8fc94a",
"assets/assets/svgs/reminderSvg.svg": "79cfcfae8a2644f71a5978a8bbb945e5",
"assets/assets/svgs/eventSvg.svg": "500f3c1f397d9eca1431d02231f49e35",
"assets/assets/svgs/notificationSvg.svg": "1c8b7c0cf102c72ef84fcdaeaf339bfc",
"assets/assets/svgs/micSvg.svg": "d238cd72fa1c40f0d4e0591e832449fc",
"assets/assets/svgs/archieveSvg.svg": "a7e8d138b121ef941c49e21963beb74e",
"assets/assets/svgs/completedTaskSvg.svg": "104a8a21158e513cc207b38249a36f98",
"assets/assets/svgs/dashboardSvg.svg": "500634d95e2805b81b48b5ba5300d77f",
"assets/assets/svgs/doubleArrowLeftSvg.svg": "8d1a8ec5ca2ee549c3ec0ef8aba67f9a",
"assets/assets/svgs/emptySvg.svg": "4ec4f9793d884969960d119cb39b1af0",
"assets/assets/svgs/gridViewSvg.svg": "65c20eb020cd49e17de0389e1281f56e",
"assets/assets/svgs/goalSvg.svg": "e4ae26e2bd7b808c9e59580e99219550",
"assets/assets/svgs/todoSvg.svg": "6afd5cf07e9004ca37e0297777519ab0",
"assets/assets/svgs/templatesSvg.svg": "72149040680708a02db18b3fffb2a003",
"assets/assets/svgs/aiSvg.svg": "ddcffb341d07a97171c1429b07b83ea9",
"assets/assets/svgs/calenderSvg.svg": "1b2b09745cef600ac3dd3c96ec0deaf0",
"assets/assets/svgs/timeSvg.svg": "7f71cfd5fbaa3612502bd2e324e2c5f2",
"assets/assets/svgs/addWhiteSvg.svg": "b55237ec0b257077a9c7cac2ca6e4c92",
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
