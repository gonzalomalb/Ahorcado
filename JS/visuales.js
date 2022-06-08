const canvas = document.querySelector("canvas");
const pincel = canvas.getContext("2d");

/* dibujar humanito */
function dibujarHumano(numero){
    if(numero == 0){
        crearCabeza();
    }else if(numero == 1){
        crearCuerpo();
    }else if(numero == 2){
        crearBrazoIzq();
    }else if(numero == 3){
        crearBrazoDer();
    }else if(numero == 4){
        crearPiernaIzq();
    }else if(numero == 5){
        crearPiernaDer();
    }else {
        return;
    }
}

/* dibujar canvas */
function dibujarCanvas(){
    pincel.fillStyle = "transparent";
    pincel.fillRect(0, 0, 800, 600);
}

/* horca */
function dibujarHorca(){
    pincel.fillStyle = "black";
    pincel.fillRect(170, 340, 180, 20);
    pincel.fillRect(200, 340, 20, -300);
    pincel.fillRect(200, 50, 120, 20);
    pincel.fillRect(320, 50, 15, 60);  
}

/* cabeza */
function crearCabeza(){
    pincel.lineWidth = 10;
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.arc(328, 150, 30, 0, 2 * Math.PI);
    pincel.fill();
}

/* cuerpo */
function crearCuerpo(){
    pincel.fillStyle = "black";
    pincel.fillRect(320, 188, 10, 75);
}

/* brazo Izq */
function crearBrazoIzq(){
    pincel.lineWidth = 10;
    pincel.strokeStyle = "black";
    pincel.moveTo(322, 195);
    pincel.lineTo(272, 220);
    pincel.stroke();
}

/* brazo Der */
function crearBrazoDer(){
    pincel.lineWidth = 10;
    pincel.strokeStyle = "black";
    pincel.moveTo(325, 195);
    pincel.lineTo(375, 220);
    pincel.stroke();
}

/* pierna Izq */
function crearPiernaIzq(){
    pincel.lineWidth = 10;
    pincel.strokeStyle = "black";
    pincel.moveTo(325, 260);
    pincel.lineTo(290, 325);
    pincel.stroke();
}

/* pierna Der */
function crearPiernaDer(){
    pincel.lineWidth = 10;
    pincel.strokeStyle = "black";
    pincel.moveTo(325, 260);
    pincel.lineTo(360, 325);
    pincel.stroke();
}   

/* dibujar humanito ganador */
function dibujarGanador(){
    dibujarCanvas();
    dibujarHumanoGanador();
}

function dibujarHumanoGanador(){
    pincel.lineWidth = 10;
    pincel.fillStyle = "black";
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.arc(306, 150, 30, 0, 2 * Math.PI);
    pincel.fill();
    pincel.fillRect(300, 188, 10, 75);
    pincel.moveTo(302, 195);
    pincel.lineTo(250, 170);
    pincel.stroke();
    pincel.moveTo(305, 195);
    pincel.lineTo(360, 170);
    pincel.stroke();
    pincel.moveTo(305, 260);
    pincel.lineTo(270, 325);
    pincel.stroke();
    pincel.moveTo(305, 260);
    pincel.lineTo(340, 325);
    pincel.stroke();
}



/* codigo visuales */
function volverInvisible(obj, clase){
    let objeto = document.getElementById(obj);
    objeto.classList.replace(clase, "invisible");
}

function borrarInvisible(obj, clase){
    let objeto = document.getElementById(obj);
    objeto.classList.replace("invisible", clase);
}

function limpiarCanvas(){
    canvas.width = canvas.width;
}

