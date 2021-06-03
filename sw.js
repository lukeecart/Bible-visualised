const version = '1.1'
const cacheName = `cache-version-${version}`
const urls = [
  '/genealogy.html',
  '/kings.html',
  '/projects.html',
  'https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap',
  '/styles/baseStyles.css',
  '/styles/homeStyle.css',
  '/styles/cookieConsent.css',
  '/js/overlay.js',
  '/res/Logo.svg',
  '/res/Studying.svg',
  '/res/Favicon.png',
  '/manifest.json',
  '/js/peopleCondensed.js',
]

self.skipWaiting()

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(urls)
    }),
  )
})

self.addEventListener('fetch', (event) => {
  console.log('fetching:', event.request.url)
  event.respondWith(
    caches.open(cacheName).then((cache) => {
      return cache.match(event.request.url).then((response) => {
        if (response) {
          console.log('response in cache')
        }
        return response || fetch(event.request.url)
      })
    }),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheName) => {
      return Promise.all(
        cacheName.map((name) => {
          console.log('deleting old cache')
          if (name !== cacheName) {
            return caches.delete(name)
          }
        }),
      )
    }),
  )
})
