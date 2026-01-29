importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  messagingSenderId: "289911262006" 
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[SW] Получено сообщение:', payload);
  
  // Показываем уведомление
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/CatTracker/icon.png', // Ваша иконка
    // При клике открываем сайт
    click_action: "https://psvalentine.github.io/CatTracker/" 
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});
