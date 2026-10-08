const scene = document.querySelector(".scene");

// Create floating particles
function createParticle() {
    const particle = document.createElement("span");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "vw";
    particle.style.animationDuration = (3 + Math.random() * 5) + "s";
    particle.style.animationDelay = Math.random() * 2 + "s";

    const size = 3 + Math.random() * 7;
    particle.style.width = size + "px";
    particle.style.height = size + "px";

    scene.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 9000);
}

// Create particles continuously
setInterval(createParticle, 150);

// Create sparkles
function createSparkle() {
    const sparkle = document.createElement("span");

    sparkle.classList.add("sparkle");

    sparkle.innerHTML = "✦";

    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";
    sparkle.style.animationDuration = (1 + Math.random() * 2) + "s";

    scene.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 3000);
}

// Create sparkles continuously
setInterval(createSparkle, 300);
