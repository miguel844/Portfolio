// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute("href"));
        if (destino) {
            destino.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Pequeña animación al cargar
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "1";
});

// ===== MODO OSCURO =====
const botonModo = document.getElementById("modoOscuroBtn");

// Cargar modo oscuro si estaba guardado antes
if (localStorage.getItem("modoOscuro") === "true") {
    document.body.classList.add("dark-mode");
    botonModo.textContent = "☀️";
}

botonModo.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Cambiar icono
    if (document.body.classList.contains("dark-mode")) {
        botonModo.textContent = "☀️";
        localStorage.setItem("modoOscuro", "true");
    } else {
        botonModo.textContent = "🌙";
        localStorage.setItem("modoOscuro", "false");
    }
});
