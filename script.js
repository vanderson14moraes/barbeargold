const btnMenu = document.getElementById("menu-hamburguer");

const menu = document.querySelector(".menu");

const links = document.querySelectorAll(".menu-link");


// Abrir e fechar o menu pelo botão hamburguer
btnMenu.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});


// Ativar o link clicado
links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(item => item.classList.remove("ativo"));
        link.classList.add("ativo");
    });
});


// Fechar o menu ao clicar fora dele
document.addEventListener("click", (event) => {

    if (
        menu.classList.contains("ativo") &&
        !menu.contains(event.target) &&
        !btnMenu.contains(event.target)
    ) {
        menu.classList.remove("ativo");
    }

});