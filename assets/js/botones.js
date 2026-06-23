const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const bars = document.querySelectorAll(".bar");

btn.addEventListener("click", () => {
  menu.classList.toggle("translate-x-full");

  // Animación hamburguesa -> X
  bars[0].classList.toggle("rotate-45");
  bars[0].classList.toggle("translate-y-3.5");
  bars[0].classList.toggle("h-2");
  
  bars[1].classList.toggle("opacity-0");
  
  bars[2].classList.toggle("-rotate-45");
  bars[2].classList.toggle("-translate-y-3.5");
  bars[2].classList.toggle("h-2");
});