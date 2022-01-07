const btn = document.getElementById('menu-btn') /* Creating constant and assigning it by id */
const nav = document.getElementById('menu')

function navToggle() {
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')
}

btn.addEventListener('click', navToggle) /* Event listener added to our button and whenever its clicked we call a function called NavToggle */