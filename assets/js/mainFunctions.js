const skill = ["HTML", "CSS", "Tailwind", "JavaScript", "PHP", "Laravel", "MySQL"];
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

function crear3Tarjetas(listaProyectos) {
    const contenedor = document.getElementById("mainCards");

    listaProyectos.forEach(proyecto => {
        
        
        if (proyecto.mostrarPaginaPrincipal){
            const card = document.createElement("article");
            console.log(proyecto);
            card.className =
                "bg-white rounded-xl overflow-hidden shadow-lg md:hover:scale-105 md:transition p-2 flex flex-col h-full";

            card.innerHTML = `
                <img
                    src="${proyecto.imagen}"
                    alt="${proyecto.titulo}"
                    class="w-full h-40 block object-cover md:object-contain rounded-t-md"
                >

                <div class="p-4 flex flex-col flex-1">
                    
                    <div>
                    <h3 class="text-xl font-bold">
                        ${proyecto.titulo}
                    </h3>

                    <p>
                        ${proyecto.descripcion}
                    </p>

                    <ul class="flex flex-wrap gap-1 mb-1">
                        ${proyecto.tecnologias.map(tec => `
                        <li class="estilo-${tec.toLowerCase()}">
                            ${tec}
                        </li>
                        `).join("")}
                    </ul>
                    </div>

                    <a
                    href="${proyecto.github}"
                    target="_blank"
                    class="inline-block mt-auto text-primary font-bold"
                    >
                    Ver proyecto →
                    </a>

                </div>
            `;

            contenedor.appendChild(card);
        }
    });
}

crear3Tarjetas(proyectos);