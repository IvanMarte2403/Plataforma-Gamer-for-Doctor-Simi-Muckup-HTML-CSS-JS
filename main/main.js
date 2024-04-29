gsap.to("#div1", {
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

gsap.to("#bacteria1", {
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

    // Cambia el contenido del div1 a un iframe que carga el juego
    div1.innerHTML = '<iframe src="/game/index.html" width="100%" height="100%"></iframe>';

    // Cambia el estilo del div1 para que ocupe el 100% de la pantalla
    div1.style.width = '100vw';
    div1.style.height = '100vh';

    // Oculta el div2
    div2.style.display = 'none';
}