const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.navbar-nav');
const links = document.querySelectorAll('.nav-item')

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open")
    hamburger.classList.toggle("twist")
})