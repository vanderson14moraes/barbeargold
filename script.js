

const btnMenu = document.getElementById("menu-hamburguer")
const menu = document.getElementById("menu")

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('ativo')
})