const version = '3.7'
const cacheName = `cache-version-${version}`
const urls = [
  '/',
  'https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap',
  '/styles/baseStyles.css',
  '/manifest.json',
  '/res/pwaicon.png',
  '/offline.html',
  '/res/Error.svg',
  '/styles/homeStyle.css',
  '/res/Studying.svg',
  '/genealogy',
  '/js/search.js',
  '/js/peopleCondensed.js',
  '/styles/FamilyTreeStyle.css',
  '/styles/searchBar.css',
  '/js/index.js',
  '/about',
  'https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js',
  '/projects',
  '/styles/projectStyle.css',
  '/res/Project.svg',
  '/res/GenealogyIcon.png',
  '/res/crown.png',
  '/res/Logo.svg',
  '/res/bible-image.jpg',
  '/privacy-policy',
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
            if (event.request.url.includes('analytics.js')) return
            return fetch(event.request.url)
          } else {
            return response
          }
        })
        .catch((error) => {
          console.log(error)
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
