// JavaScript for random glitch effects on the hero text
const glitchElements = document.querySelectorAll('.glitch-effect h1, .glitch-effect p');

function applyGlitch() {
    glitchElements.forEach((el) => {
        el.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
        el.style.opacity = Math.random() * 0.5 + 0.5;
    });
    setTimeout(applyGlitch, 100);
}

applyGlitch();
