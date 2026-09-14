const btnMenu = document.getElementById("menu-hamburguer");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu-link");

btnMenu.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});

links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(item => item.classList.remove("ativo"));
        link.classList.add("ativo");
    });
});