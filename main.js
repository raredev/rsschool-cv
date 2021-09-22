const burgerBtn = document.querySelector('.burger')
const nav = document.querySelector('.nav')

const menu = document.querySelector('.menu')
const container = document.querySelector('.container')

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger--active')
    nav.classList.toggle('nav--active')
})

menu.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger--active')
    nav.classList.toggle('nav--active')
})

container.addEventListener('click', () => {
    if (nav.classList.contains('nav--active')) {
        burgerBtn.classList.remove('burger--active')
        nav.classList.remove('nav--active')
    }
})