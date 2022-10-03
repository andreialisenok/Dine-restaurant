const burger = document.querySelector('.burger')
const nav = document.querySelector('nav');
const body = document.querySelector('body')

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    nav.classList.toggle('active')
    body.classList.toggle('_lock')
})
