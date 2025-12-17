// console.log('[firebase-messaging-sw.js] Service worker script loading...');

// importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js");
// importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js");

// console.log('[firebase-messaging-sw.js] Firebase scripts loaded');

// firebase.initializeApp({
//   apiKey: "AIzaSyDguX_cfB2yrIlgHF0xsdrmV6SPZuc8Mzw",
//   authDomain: "lima-life-manager-a3687.firebaseapp.com",
//   projectId: "lima-life-manager-a3687",
//   storageBucket: "lima-life-manager-a3687.appspot.com",

//   // storageBucket: "lima-life-manager-a3687.firebasestorage.app",
//   messagingSenderId: "216188664780",
//   appId: "1:216188664780:web:0e17c856e6cba02a5ebb69",
//   measurementId: "G-447QNEZLD9"
// });

// console.log('[firebase-messaging-sw.js] Firebase initialized');

// // Get messaging instance
// const messaging = firebase.messaging();
// console.log('[firebase-messaging-sw.js] Messaging instance created');

// // Service worker installation
// self.addEventListener('install', (event) => {
//   console.log('[firebase-messaging-sw.js] Service Worker installing...');
//   self.skipWaiting();
// });

// self.addEventListener('activate', (event) => {
//   console.log('[firebase-messaging-sw.js] Service Worker activated!');
//   event.waitUntil(clients.claim());
// });

// // Handle background messages (when app is not in focus)
// messaging.onBackgroundMessage((payload) => {
//   console.log('[firebase-messaging-sw.js] Background message received:', payload);

//   const notificationTitle = payload.notification?.title || 'New Notification';
//   const notificationOptions = {
//     body: payload.notification?.body || 'You have a new notification',
//     icon: payload.notification?.icon || '/icons/Icon-192.png',
//     badge: '/icons/Icon-192.png',
//     tag: payload.messageId || 'notification-tag',
//     requireInteraction: false,
//     data: payload.data || {}
//   };

//   console.log('[firebase-messaging-sw.js] Showing notification:', notificationTitle);
//   return self.registration.showNotification(notificationTitle, notificationOptions);
// });

// // Listen to ALL push events (including foreground)
// self.addEventListener('push', (event) => {
//   console.log('[firebase-messaging-sw.js] Push event received!', event);

//   if (event.data) {
//     try {
//       const payload = event.data.json();
//       console.log('[firebase-messaging-sw.js] Push payload:', payload);

//       const notificationTitle = payload.notification?.title || payload.data?.title || 'New Notification';
//       const notificationOptions = {
//         body: payload.notification?.body || payload.data?.body || 'You have a new notification',
//         icon: payload.notification?.icon || '/icons/Icon-192.png',
//         badge: '/icons/Icon-192.png',
//         data: payload.data || {}
//       };

//       event.waitUntil(
//         self.registration.showNotification(notificationTitle, notificationOptions)
//       );
//     } catch (error) {
//       console.error('[firebase-messaging-sw.js] Error handling push:', error);
//     }
//   }
// });

// // Handle notification click
// self.addEventListener('notificationclick', (event) => {
//   console.log('[firebase-messaging-sw.js] Notification clicked:', event);

//   event.notification.close();

//   // Open the app or focus existing window
//   event.waitUntil(
//     clients.matchAll({ type: 'window', includeUncontrolled: true })
//       .then((clientList) => {
//         // If app is already open, focus it
//         for (const client of clientList) {
//           if (client.url.includes(self.location.origin) && 'focus' in client) {
//             return client.focus();
//           }
//         }
//         // Otherwise, open a new window
//         if (clients.openWindow) {
//           return clients.openWindow('/');
//         }
//       })
//   );
// });

console.log('[firebase-messaging-sw.js] Service worker script loading...');

importScripts("https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js");

console.log('[firebase-messaging-sw.js] Firebase scripts loaded');

firebase.initializeApp({
  apiKey: "AIzaSyDguX_cfB2yrIlgHF0xsdrmV6SPZuc8Mzw",
  authDomain: "lima-life-manager-a3687.firebaseapp.com",
  projectId: "lima-life-manager-a3687",
  storageBucket: "lima-life-manager-a3687.firebasestorage.app",  // ✅ FIXED
  messagingSenderId: "216188664780",
  appId: "1:216188664780:web:0e17c856e6cba02a5ebb69",
  measurementId: "G-447QNEZLD9"
});

console.log('[firebase-messaging-sw.js] Firebase initialized');

const messaging = firebase.messaging();

// Background message handler
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Background message:', payload);

  const title = payload.notification?.title || payload.data?.title || 'New Notification';
  const options = {
    body: payload.notification?.body || payload.data?.body || '',
    icon: '/icons/Icon-192.png',
    badge: '/icons/Icon-192.png',
    data: payload.data || {}
  };

  return self.registration.showNotification(title, options);
});

// Notification click handler
self.addEventListener('notificationclick', function(event) {
  console.log('[firebase-messaging-sw.js] Notification clicked');
  event.notification.close();

  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true })
      .then(clientList => {
        for (const client of clientList) {
          if ('focus' in client) return client.focus();
        }
        if (clients.openWindow) return clients.openWindow('/');
      })
  );
});

// Service Worker lifecycle
self.addEventListener('install', (event) => {
  console.log('[firebase-messaging-sw.js] Installing...');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('[firebase-messaging-sw.js] Activated');
  event.waitUntil(clients.claim());
});
