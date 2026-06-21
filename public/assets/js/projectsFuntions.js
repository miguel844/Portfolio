
function crearTarjetas(listaProyectos) {
    const contenedor = document.getElementById("cards");

    listaProyectos.forEach(proyecto => {
        

            const card = document.createElement("article");
            console.log(proyecto);
            card.className =
                "bg-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition p-2 flex flex-col h-full";

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
                    class="inline-block mt-auto text-[#ff5050] font-bold"
                    >
                    Ver proyecto →
                    </a>

                </div>
            `;

            contenedor.appendChild(card);
        
    });
}

crearTarjetas(proyectos);