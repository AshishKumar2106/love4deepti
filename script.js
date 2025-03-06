const canvas = document.getElementById("loveCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const heartParticles = [];

function createHeart() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 10 + 5,
        speedY: Math.random() * 2 + 1,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`
    };
}

function drawHeart(particle) {
    ctx.fillStyle = particle.color;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fill();
}

function updateHeart(particle) {
    particle.y -= particle.speedY;
    if (particle.y < 0) particle.y = canvas.height;
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (heartParticles.length < 100) {
        heartParticles.push(createHeart());
    }
    heartParticles.forEach((particle, index) => {
        updateHeart(particle);
        drawHeart(particle);
    });
    requestAnimationFrame(animate);
}

animate();
