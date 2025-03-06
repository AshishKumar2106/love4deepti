function generateMessage() {
    const messages = [
        "You are my sunshine ☀️",
        "I love you more than words can say ❤️",
        "Every moment with you is magical ✨",
        "You make my heart smile 😊",
        "You are my forever and always 💞",
        "With you, every day is special! 🌹"
    ];
    
    // Pick a random message
    let randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById("loveMessage").innerText = messages[randomIndex];
}
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw"; // Random position
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Random fall speed

    document.getElementById("heart-container").appendChild(heart);

    setTimeout(() => {
        heart.remove(); // Remove heart after animation
    }, 5000);
}

// Generate a heart every 300ms
setInterval(createHeart, 300);

document.getElementById("playMusic").addEventListener("click", function () {
    const music = document.getElementById("loveMusic");

    if (music.paused) {
        music.play();
        this.innerText = "⏸ Pause Music";
    } else {
        music.pause();
        this.innerText = "🎶 Play Romantic Music";
    }
});
const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = [];

function createConfetti() {
    const colors = ["#ff0000", "#ff66b2", "#ffcccc", "#ff3399"];
    for (let i = 0; i < 50; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 8 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            speedY: Math.random() * 3 + 2,
            speedX: (Math.random() - 0.5) * 2
        });
    }
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach((particle, index) => {
        ctx.beginPath();
        ctx.fillStyle = particle.color;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        particle.y += particle.speedY;
        particle.x += particle.speedX;

        if (particle.y > canvas.height) {
            confetti.splice(index, 1);
        }
    });
    requestAnimationFrame(drawConfetti);
}

document.getElementById("startConfetti").addEventListener("click", function () {
    createConfetti();
    drawConfetti();
});
