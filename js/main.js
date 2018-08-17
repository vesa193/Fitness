const hamburger = document.querySelector('#hamb')
const items = document.querySelector('.nav__items')

hamburger.addEventListener('click', function () {
    items.classList.toggle('nav__items--open')
})