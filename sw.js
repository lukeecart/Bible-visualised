const version = '2'
const cacheName = `cache-version-${version}`
const urls = [
  '/',
  '/projects',
  'https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap',
  '/styles/baseStyles.css',
  '/manifest.json',
  '/res/pwaicon.png',
  '/offline.html',
  '/res/Error.svg',
  '/styles/homeStyle.css',
  '/res/Studying.svg',
  '/genealogy.html',
  '/about.html',
  '/projects.html',
  '/whowasalive.html',
  '/res/Logo.svg',
  '/privacy-policy.html',
]

self.skipWaiting()

self.addEventListener('install', (event) => {
  console.log('Attempting to install service worker and cache static assets')
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(urls)
    }),
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open(cacheName).then((cache) => {
      return cache
        .match(event.request.url)
        .then((response) => {
          if (!response) {
            return fetch(event.request.url)
          } else {
            return response
          }
        })
        .catch((error) => {
          alert(error.message)
          return caches.match('/offline.html')
        })
    }),
  )
})

self.addEventListener('activate', (event) => {
  console.log('Activating new service worker...')
  const cacheWhitelist = [cacheName]

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
})
