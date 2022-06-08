const letrasIncorrectaOutput = document.querySelector("#letras-incorrectas");
const textoResultado = document.querySelector("#texto-resultado");
const botonTerminar = document.querySelector("#boton-terminar");
const inputLetras = document.querySelector("#input-letras");
let letraIncorrecta = [];
let letraCorrecta = [];
let letrasUtilizadas = [];

escucharJuego(inputLetras);

function escucharJuego(eleInput){
    eleInput.addEventListener("keypress",function(input){
        inputLetras.value = "";
        if(detenerJuego == false){
            let letra = input.key.toUpperCase();
            if(!regex.test(letra)){
                return;
            }else if(letrasUtilizadas.includes(letra)){
                alert("letra utilizada");
                
            }else {
                ejecutarLetra(letra);
                letrasUtilizadas.push(letra);
                verificarGanador();
            } 
        } else {
            return;
        }       
    }
)}    

function ejecutarLetra(comparador){
    const letraFila = document.querySelector(".letras");
    const letraInvi = letraFila.childNodes;
    if(palabraElegida.includes(comparador)){
        letraInvi.forEach(function(letra){
            if(letra.textContent == comparador){
                letraCorrecta.push(comparador);
                letra.classList.replace("letra-invisible", "columna");
            }else{
                return;
            }})
    }else{
        dibujarHumano(letraIncorrecta.length);
        letraIncorrecta.push(comparador);
        letrasIncorrectaOutput.textContent = letraIncorrecta;
    }    
}


function verificarGanador(){
    if(letraIncorrecta.length == 6){
        const letraFila = document.querySelector(".letras");
        const letraInvi = letraFila.childNodes;
        letraInvi.forEach(function(letra){
            letra.classList.replace("letra-invisible", "columna");
        })
        detenerJuego = true;
        textoResultado.textContent = "Perdiste, fin del juego";
        borrarInvisible("texto-resultado", "texto-resultado-perdedor");
    }else if(letraCorrecta.length == palabraElegida.length){
        limpiarCanvas();
        dibujarGanador();
        detenerJuego = true;
        textoResultado.textContent = "Ganaste, felicidades!";
        borrarInvisible("texto-resultado", "texto-resultado-ganador");
    }else {
        return;
    }
}

function terminarJuego(){
    detenerJuego = true;
    letraIncorrecta = [];
    letraCorrecta = [];
    letrasUtilizadas = [];
    textoResultado.innerHTML = "";
    letrasIncorrectaOutput.innerHTML = "";
    limpiarCanvas();
    borrarInvisible("section-inicio", "section-inicio");
    borrarInvisible("footer", "footer");
    volverInvisible("section-juego", "section-juego");
    volverInvisible("texto-resultado","texto-resultado-perdedor");
    volverInvisible("texto-resultado","texto-resultado-ganador");
}

function focusLetras(){
    inputLetras.focus();
}