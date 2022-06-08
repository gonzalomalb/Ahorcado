/*Creación del Juego*/
const sectionInicio = document.querySelector("#section-inicio");
const sectionJuego = document.querySelector("#section-juego");
const inputAgregarPalabra = document.querySelector("#agregar-palabra-input");
const checkbox = document.querySelector("#checkbox");
const tabla = document.querySelector("#tabla");
const regex = new RegExp(/^[A-Z]+$/, "i");
let palabras = ["JAVASCRIPT", "HTML", "CSS", "ALURA", "ORACLE", "ONE", "PROGRAMACION"];
let palabraElegida = "";
let detenerJuego = true;


function iniciarJuego() {
    detenerJuego = false;
    tabla.innerHTML = "";
    limpiarCanvas();
    borrarInvisible("section-juego", "section-juego");
    volverInvisible("section-inicio", "section-inicio");
    volverInvisible("footer", "footer");
    dibujarCanvas();
    dibujarHorca();
    if (checkbox.checked) {
        elegirPalabra(palabras[palabras.length - 1]);
        crearTabla(palabraElegida);
        focusLetras();
    } else {
        elegirPalabra(palabraRandom(palabras));
        crearTabla(palabraElegida);
        focusLetras();
    }
}

function elegirPalabra(palabra) {
    palabraElegida = palabra;
    return palabra;
}

function palabraRandom(palabra) {
    let cantidadPalabras = palabra.length;
    const numeroRandom = Math.round(Math.random() * (parseInt(cantidadPalabras)));
    let palabraSeleccionada = palabras[numeroRandom];
    return palabraSeleccionada;
}

function adicionarPalabra(palabra) {
    let palabraInput = palabra.value;
    if (palabraInput.length <= 2) {
        borrarInvisible("agregar-palabra-input", "agregar-palabra-input");
        inputAgregarPalabra.focus();
        return;
    } else if(regex.test(palabraInput)){
        let palabraAdicionar = palabraInput.toUpperCase();
        palabras.push(palabraAdicionar);
        palabra.value = "";
        volverInvisible("agregar-palabra-input", "agregar-palabra-input");
        alert("La palabra " + palabraAdicionar + " fue agregada al diccionario.");
    } else { 
        alert("solo letras");
        return;
    }
    
    
}

function crearTabla(palabra) {
    tabla.innerHTML = "";
    crearFila(palabra);
}

function crearFila(palabra) {
    const filaLetras = document.createElement("tr");
    filaLetras.classList.add("letras")
    const filaGuiones = document.createElement("tr");
    filaGuiones.classList.add("guiones")
    for (i = 0; i < palabra.length; i++) {
        filaLetras.appendChild(crearColumna(palabra[i]));
        filaGuiones.appendChild(crearColumna("_"));
    }
    tabla.appendChild(filaLetras);
    tabla.appendChild(filaGuiones);
}

function crearColumna(text) {
    const columna = document.createElement("td");
    const guion = "_";
    if (text == guion) {
        columna.classList.add("columna");
        columna.textContent = text;
    } else {
        columna.classList.add("letra-invisible");
        columna.textContent = text;
    }
    return columna;
}



