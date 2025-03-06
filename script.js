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
