// boton menu hamburguesa
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});
