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
