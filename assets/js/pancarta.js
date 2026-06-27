const pancarta = document.getElementById("pancarta");
const texto = `HOLA MI NOMBRE ES
MIGUEL Y SOY
PROGRAMADOR WEB`;

function typewriterEffect(elemento, texto, i = 0) {
    elemento.innerHTML += texto[i];
    if (i === texto.length - 1) return;
    setTimeout(() => typewriterEffect(pancarta, texto, i + 1), 100);


}

typewriterEffect(pancarta, texto);
