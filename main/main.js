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