const hamb = document.querySelector(".hamb")
const menu = document.querySelector(".menu-itens")


hamb.addEventListener("click", function() {
    menu.classList.toggle("display")
})