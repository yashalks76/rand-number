let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;

function checkGuess() {

    let guess = Number(document.getElementById("guessInput").value);
    let message = document.getElementById("message");

    if (guess < 1 || guess > 100 || isNaN(guess)) {
        message.textContent = "Enter a number between 1 and 100.";
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        message.textContent =
            "Correct! You guessed it in " + attempts + " attempts!";
    }
    else if (guess > randomNumber) {
        message.textContent = "Too high! Try again.";
    }
    else {
        message.textContent = "Too low! Try again.";
    }

    document.getElementById("attempts").textContent =
        "Attempts: " + attempts;

    if (attempts >= maxAttempts && guess !== randomNumber) {
        message.textContent =
            "Game Over! The number was " + randomNumber;
    }
}

function restartGame() {

    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    document.getElementById("guessInput").value = "";
    document.getElementById("message").textContent =
        "Game restarted! Make a new guess.";

    document.getElementById("attempts").textContent =
        "Attempts: 0";
}