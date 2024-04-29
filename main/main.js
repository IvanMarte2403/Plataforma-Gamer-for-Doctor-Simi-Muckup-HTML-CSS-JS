var animacionDiv1 = gsap.to("#div1", {
    duration: 2,
    y: "-20px",
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

gsap.to("#div2", {
    duration: 2,
    y: "-20px",
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

// Asignaciones de variables para para la animar posteriormente

var animacionBacteria1 = gsap.to("#bacteria1", {
    duration: 2,
    x: "100px",
    rotation: gsap.utils.random(-360, 360),
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

gsap.to("#galaxia1", {
    duration: 10,
    rotation: 360,
    repeat: -1,
    ease: "none"
});


gsap.to("#galaxia2", {
    duration: 10,
    rotation: 360,
    repeat: -1,
    ease: "none"
});


gsap.from("#titulo", {
    duration: 2,
    scale: 0.5,
    opacity: 0,
    y: -50,
    ease: "elastic.out(1, 0.3)",
    repeat: -1,
    yoyo: true
});



// ====================Cargar Los Juegos==========
function cargarJuego() {
    // Obtén los elementos
    var div1 = document.getElementById('div1');
    var div2 = document.getElementById('div2');
    var body = document.body;

    // Pausa las animaciones
    animacionDiv1.pause();
    animacionBacteria1.pause();

    // Cambia el contenido del div1 a un iframe que carga el juego y agrega el botón de cierre
    div1.innerHTML = '<iframe src="/game/index.html" width="100%" height="100%"></iframe><i id="cerrar" class="fas fa-times" style="position: absolute; top: 10px; right: 10px; cursor: pointer;"></i>';

    // Cambia el estilo del div1 para que ocupe el 100% de la pantalla
    div1.style.width = '100vw';
    div1.style.height = '100vh';

    // Oculta el div2
    div2.style.display = 'none';

    // Bloquea el desplazamiento de la página
    body.style.overflow = 'hidden';

    // Agrega un controlador de eventos al cuerpo para permitir el desplazamiento cuando se hace clic fuera del div del juego
    body.addEventListener('click', function(event) {
        if (event.target === body) {
            body.style.overflow = 'auto';
        }
    });

    // Usa setTimeout para retrasar la adición del controlador de eventos hasta que el DOM se haya actualizado
   setTimeout(function() {
    document.getElementById('cerrar').addEventListener('click', function() {
        // Cambia el contenido del div1 de nuevo a la imagen original
        div1.innerHTML = '<img src="ruta/a/la/imagen/original.png" alt="" onclick="cargarJuego()">';

        // Restaura el estilo original del div1
        div1.style.width = 'auto';
        div1.style.height = 'auto';

        // Muestra el div2
        div2.style.display = 'block';

        // Permite el desplazamiento de la página
        body.style.overflow = 'auto';

        // Reanuda las animaciones
        animacionDiv1.restart();
        animacionBacteria1.restart();
    });
}, 0);
}

function cargarJuego2() {
    // Obtén los elementos
    var div1 = document.getElementById('div1');
    var div2 = document.getElementById('div2');
    var body = document.body;

    // Pausa las animaciones
    animacionDiv1.pause();
    animacionBacteria1.pause();

    // Cambia el contenido del div1 a un iframe que carga el segundo juego y agrega el botón de cierre
    div2.innerHTML = '<iframe src="/game2/index.html" width="100%" height="100%"></iframe><i id="cerrar2" class="fas fa-times" style="position: absolute; top: 10px; right: 10px; cursor: pointer;"></i>';

    // Cambia el estilo del div1 para que ocupe el 100% de la pantalla
    div2.style.width = '100vw';
    div2.style.height = '100vh';

    // Oculta el div2
    div1.style.display = 'none';

    // Bloquea el desplazamiento de la página
    body.style.overflow = 'hidden';

    // Agrega un controlador de eventos al botón de cierre
    document.getElementById('cerrar2').addEventListener('click', function() {
        // Cambia el contenido del div1 de nuevo a la imagen original
        div2.innerHTML = '<img src="ruta/a/la/imagen/original.png" alt="" onclick="cargarJuego2()">';

        // Restaura el estilo original del div1
        div2.style.width = 'auto';
        div2.style.height = 'auto';

        // Muestra el div2
        div2.style.display = 'block';

        // Permite el desplazamiento de la página
        body.style.overflow = 'auto';

        // Reanuda las animaciones
        animacionDiv1.restart();
        animacionBacteria1.restart();
    });
}