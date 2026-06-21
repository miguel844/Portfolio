const skill = ["HTML","CSS","Tailwind","JavaScript","PHP","Laravel","MySQL"];
let salidaSkill = document.getElementById("salidaSkill");

// Creamos función para pintar skills
function pintarSkills() {
    skill.forEach(habilidad => {
        let nuevoDiv = document.createElement("div");

        nuevoDiv.classList.add(
            "font-titulo",
            "text-3xl",
            "p-6",
            "md:px-20",
        );

        nuevoDiv.textContent = habilidad;
        salidaSkill.appendChild(nuevoDiv);
    });
}

pintarSkills();
pintarSkills();
pintarSkills();


let posicion = 0;

function mover() {
    posicion -= 0.5; // velocidad (más alto = más rápido)

    salidaSkill.style.transform = `translateX(${posicion}px)`;

    // reinicio suave cuando llega a mitad
    if (Math.abs(posicion) >= salidaSkill.scrollWidth / 2) {
        posicion = 0;
    }

    requestAnimationFrame(mover);
}

mover();

function crearTarjetaProyecto(){


}