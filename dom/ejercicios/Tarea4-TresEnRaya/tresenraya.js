"use strict";

let tablero = [0, 0, 0, 0, 0, 0, 0, 0, 0];  // Tablero inicial vacío
let jugador = "X"; 
let puntuacionJX = 0;  // Puntuación de jugador X
let puntuacionJO = 0;  // Puntuación de jugador O
let contarcelda=0; // Contador de celdas ocupadas

let puntosJX;
let puntosJO;
let turnoJ;

//---------------------------
// Inicialización
//---------------------------
window.addEventListener("load", () => {
    // Asignar puntos
    puntosJX = document.getElementById("puntuacionJX");
    puntosJO = document.getElementById("puntuacionJO");

    // Identificar el turno 
    turnoJ = document.getElementById("turnoJugador")
    turnoJ.innerText = jugador;
    
    // Añadir eventos de clic a todas las celdas
    for (let i = 0; i < 9; i++) {
        let celda = document.getElementById("celda" + i);
        celda.addEventListener("click", () => {
            seleccioncelda(i);
        });
    }
});

function seleccioncelda(ncelda) {
    // Si la celda está vacía (0), se puede marcar
    if (tablero[ncelda] === 0) {
        tablero[ncelda] = jugador;  // Actualizar el tablero con el jugador actual
        document.getElementById("celda" + ncelda).innerText = jugador;  // Mostrar la marca en la celda
        
        // Verificar si hay un ganador
        if (verificarGanador()) {
            alert("¡El jugador " + jugador + " ha ganado!");
            
            // Actualizar la puntuación según el jugador
            if (jugador === "X") {
                puntuacionJX++;
                puntosJX.innerText = puntuacionJX;  // Actualizar el marcador en la interfaz
            } else if (jugador === "O") {
                puntuacionJO++;
                puntosJO.innerText = puntuacionJO;  // Actualizar el marcador en la interfaz
            }

            reiniciarTablero();
        } else if(!verificarGanador()){
            contarcelda++
            if(contarcelda===9){
            alert("Empate")
            reiniciarTablero();
            }
        }
        
        // Cambiar de turno
        jugador = jugador === "X" ? "O" : "X";
        turnoJ.innerText = jugador;
        
    }
}

function verificarGanador() {
    // Comprobar filas
    if (tablero[0] !== 0 && tablero[0] === tablero[1] && tablero[1] === tablero[2]) {
        return true; 
    }
    if (tablero[3] !== 0 && tablero[3] === tablero[4] && tablero[4] === tablero[5]) {
        return true; 
    }
    if (tablero[6] !== 0 && tablero[6] === tablero[7] && tablero[7] === tablero[8]) {
        return true; 
    }

    // Comprobar columnas
    if (tablero[0] !== 0 && tablero[0] === tablero[3] && tablero[3] === tablero[6]) {
        return true; 
    }
    if (tablero[1] !== 0 && tablero[1] === tablero[4] && tablero[4] === tablero[7]) {
        return true; 
    }
    if (tablero[2] !== 0 && tablero[2] === tablero[5] && tablero[5] === tablero[8]) {
        return true; 
    }

    // Comprobar diagonales
    if (tablero[0] !== 0 && tablero[0] === tablero[4] && tablero[4] === tablero[8]) {
        return true; 
    }
    if (tablero[2] !== 0 && tablero[2] === tablero[4] && tablero[4] === tablero[6]) {
        return true; 
    }
    
    return false; 
}


function reiniciarTablero() {
    // Reiniciar el tablero y la interfaz gráfica
    tablero = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 9; i++) {
        document.getElementById("celda" + i).innerText = "";  // Limpiar las celdas
    }
    contarcelda=0;
    jugador = "O";  // El jugador X empieza de nuevo
    turnoJ.innerText = jugador;
}
