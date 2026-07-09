self.addEventListener('install', (e) => {
  console.log('Service Worker Installed');
});

self.addEventListener('fetch', (e) => {
  // Yeh aapki website ko offline ya fast load karne mein madad de sakta hai
});
