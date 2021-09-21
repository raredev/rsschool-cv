const burgerBtn = document.querySelector('.burger')
const nav = document.querySelector('.nav')
// const menu = document.querySelector('.menu')
// const menuItems = document.querySelectorAll('.menu__item')
// const menuLinks = document.querySelectorAll('.menu__item-link')

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger--active')
    nav.classList.toggle('nav--active')
})

nav.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger--active')
    nav.classList.toggle('nav--active')
})
