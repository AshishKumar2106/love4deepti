// Love Messages Generator
function generateMessage() {
    const messages = [
        "You are my sunshine ☀️",
        "I love you more than words can say ❤️",
        "Every moment with you is magical ✨",
        "You make my heart smile 😊",
        "You are my forever and always 💞",
        "With you, every day is special! 🌹"
    ];
    
    let randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById("loveMessage").innerText = messages[randomIndex];
}

// Falling Hearts Animation
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    document.getElementById("heart-container").appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);

// Play Music Button
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

// Love Confetti Effect
const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = [];

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 8 + 4,
            speedY: Math.random() * 3 + 2,
        });
    }
}

document.getElementById("startConfetti").addEventListener("click", function () {
    createConfetti();
});
window.onload = function() {
    let audio = new Audio('your-music-file.mp3'); // Replace with your song file
    audio.play();
};
