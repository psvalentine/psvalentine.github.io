importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  // Найдите этот ID в Project Settings -> General -> Your apps
  messagingSenderId: "289911262006" 
});

const messaging = firebase.messaging();

// Это сработает, когда уведомление придет в фоновом режиме
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/CatTracker/icon.png' // Путь к вашей иконке
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});