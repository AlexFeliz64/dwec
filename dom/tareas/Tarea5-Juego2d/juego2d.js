let puntuacion = 0;
let tiempoRestante; 
let bloque;
let multiplicadordificultad = 1;
let tiempodejuego;
let areaJuego;
let moverBloqueInterval;
let tiempoEsperar; 

//---------------------------
// Inicialización
//---------------------------
window.addEventListener("load", () => {
    areaJuego = document.getElementById('areajuego');
    bloque = document.getElementById('bloque');
    const botones = document.querySelectorAll('.botones-container button');

    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            const dificultad = this.getAttribute('dificultad');
            // Establecer multiplicador de dificultad y tiempo de espera
            if (dificultad === 'facil') {
                multiplicadordificultad = 1;
                tiempoEsperar = 2000; 
                tiempoRestante = 10;
            } else if (dificultad === 'normal') {
                multiplicadordificultad = 1.5;
                tiempoEsperar = 1000; 
                tiempoRestante = 7;
            } else if (dificultad === 'dificil') {
                multiplicadordificultad = 3;
                tiempoEsperar = 600; 
                tiempoRestante = 5;
            }
            comenzar();
        });
    });
});

function comenzar() {
    puntuacion = 0;
    document.getElementById('puntuacion').innerText = puntuacion;
    document.getElementById('tiemporestante').innerText = tiempoRestante;


    colocarbloque();
    comenzarcontador();
}

function colocarbloque() {
    // Aplicar la dificultad del bloque, empezando con 50px y terminando como minimo en 0px
    const tamañobloque = Math.max(0, 50 - (puntuacion * multiplicadordificultad)); 
    
    const anchoArea = 500;
    const altoArea = 500;
    
    // Colocar bloque dentro de areajuego
    const x = Math.random() * (anchoArea - tamañobloque);
    const y = Math.random() * (altoArea - tamañobloque);

    // Aplicar el tamaño y la posición al bloque
    bloque.style.width = tamañobloque + 'px';
    bloque.style.height = tamañobloque + 'px';
    bloque.style.left = x + 'px';
    bloque.style.top = y + 'px';
    bloque.style.display = 'block'; // Mostrar el bloque

    // Funcion que se activa al hacer click al bloque
    bloque.onclick = function() {
        puntuacion++;
        tiempoRestante += 2; 
        document.getElementById('puntuacion').innerText = puntuacion;
        clearTimeout(moverBloqueInterval); // Limpiar el intervalo si se hace clic
        colocarbloque(); 
    };

    // Si no hace click en un tiempo cambia de posicion
    moverBloqueInterval = setTimeout(function() {
        colocarbloque(); 
    }, tiempoEsperar);
}

function comenzarcontador() {
    clearInterval(tiempodejuego); 
    tiempodejuego = setInterval(function() {
        tiempoRestante--;
        document.getElementById('tiemporestante').innerText = tiempoRestante;
        if (tiempoRestante <= 0 || tamañobloque === 0) {
            clearInterval(tiempodejuego);
            clearTimeout(moverBloqueInterval); 
            alert("¡Se acabo! Puntuación: " + puntuacion);
            bloque.style.display = 'none'; 
        }
    }, 1000);
}
