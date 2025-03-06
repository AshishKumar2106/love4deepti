function showSurprise() {
    document.getElementById("message-box").classList.remove("hidden");
}

function showerLove() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "-20px";
    heart.style.fontSize = "2rem";
    heart.style.animation = "fall 3s linear";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);
}

function toggleMusic() {
    let audio = document.getElementById("background-music");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function showLoveMessage() {
    const messages = [
        "You are my sunshine ☀️",
        "My heart beats for you ❤️",
        "Forever yours 💞",
        "You make my world beautiful 🌍",
        "I love you more than words can say 😘"
    ];

    let msg = document.createElement("div");
    msg.innerText = messages[Math.floor(Math.random() * messages.length)];
    msg.classList.add("love-message");
    document.body.appendChild(msg);

    setTimeout(() => {
        msg.remove();
    }, 3000);
}

setInterval(showLoveMessage, 2000);
