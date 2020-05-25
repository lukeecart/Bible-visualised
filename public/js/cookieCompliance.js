const consentButton = document.getElementById('cookieButton');
const cookiesBar = document.getElementById('myCookieConsent');

consentButton.addEventListener('click', () => {
    localStorage.setItem('consent', true);
    cookiesBar.className = 'classname';
})

// const rejectButton = document.getElementById('reject');
// rejectButton.addEventListener('click', () => {
//     localStorage.removeItem('consent')
// })

