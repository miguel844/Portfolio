// boton menu hamburguesa
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");

console.log(menuBtn);
console.log(menu);
menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});
