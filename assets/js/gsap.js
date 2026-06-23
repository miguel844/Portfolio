/*
// Logo
gsap.from(".logo",{
    x:-200,
    scale: 0,
    duration:0.5,
    ease: "power3.out"
});
// Menu hamburguesa
gsap.from("#menuBtn",{
    y: -100,
    duration:1,
    ease: "power3.out"
});
// Menu escritorio
gsap.from(".menu-item",{
    y: -100,
    duration:1,
    ease: "power3.out",
    stagger:0.1
});

*/
/* https://www.youtube.com/watch?v=66rpLEBmYP4 */


const botonProyectos = document.querySelector(".btnProyectos");

botonProyectos.addEventListener("mouseenter", () => {
    gsap.to(botonProyectos, {
        x: 16,
        duration: 0.3,
        color: "white"
    });
});

botonProyectos.addEventListener("mouseleave", () => {
    gsap.to(botonProyectos, {
        x: 0,
        duration: 0.3,
        color: "#ff5050"
    });
});