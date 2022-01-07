const btn = document.getElementById('menu-btn') /* Creating constant and assigning it by id */

function navToggle() {
    btn.classList.toggle('open')
}
btn.addEventListener('click', navToggle) /* Event listener added to our button and whenever its clicked we call a function called NavToggle */