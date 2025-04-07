let playGame = false;
let remainingAttempts = 5;
let previousGuessesArray = [];
let randomNumber = Math.floor(Math.random() * 10) + 1;

const remainingGuessesElement = document.getElementById("remaining-guesses");
const remainingAttemptsElement = document.getElementById("remaining-attempts")
const previousGuessesElement = document.getElementById("previous-guesses");
const startGameElement = document.getElementById("start-game");
const formElement = document.getElementById("guess-form");
const submitButton = document.getElementById("submit-guess");

// How to play popup
document.getElementById("how-to-play-text").addEventListener("click", () => {
    document.getElementById("how-to-play").style.display = "block";
});
document.getElementById("close-pop-up").addEventListener("click", () => {
    document.getElementById("how-to-play").style.display = "none";
});

// Start game
startGameElement.addEventListener("click", () => {
    playGame = true;
    startGameElement.style.display = "none";
    formElement.style.display = "block";
    remainingGuessesElement.style.display = "block";
});

// Handle submit
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const userInput = Number(document.getElementById("user-input").value);

    if (!userInput || userInput < 1 || userInput > 10 || isNaN(userInput)) {
        alert("Enter a valid number between 1 and 10.");
        return;
    }

    if (userInput === randomNumber) {
        endGame();
        showMessage("Hurray", "Win");
    } else {
        previousGuessesArray.push(userInput);
        remainingAttempts--;

        document.getElementById("user-input").value = "";
        remainingAttemptsElement.innerHTML = remainingAttempts;
        previousGuessesElement.innerHTML = `Previous Guesses: ${previousGuessesArray.join(", ")}`;

        if (remainingAttempts < 1) {
            endGame();
            showMessage("Oh no!", "Lose");
        }
    }
});

// End game logic
function endGame() {
    playGame = false;
    remainingAttempts = 0;
}

// Show game result message
function showMessage(message1, message2) {
    const messagee = document.createElement("div");
    messagee.classList.add("fixed", "top-1/2", "left-1/2", "transform", "-translate-x-1/2", "-translate-y-1/2", "z-50");

    messagee.innerHTML = `
        <div class="w-1.5/3 p-10 bg-gray-900 text-slate-300 rounded-lg shadow-2xl text-center border-2 border-amber-500">
            <h2 class="text-2xl mb-7 font-semibold underline underline-offset-2">Game Over</h2>
            <h1 class="text-3xl font-semibold mb-3">${message1}, You ${message2}!</h1>
            <p class="mb-5">The number was <strong>${randomNumber}</strong></p>
            <button id="play-again" class="bg-purple-500 px-3 py-1 text-xl font-semibold rounded-md cursor-pointer text-white mt-2">
                Play Again 
                <img class="inline mr-1" src="assets/reload.png" width="20px">
            </button>
        </div>
    `;

    document.getElementById("container").style.display = "none";
    document.body.appendChild(messagee);

    // Restart game when button clicked
    document.getElementById("play-again").addEventListener("click", () => {
        messagee.remove();
        startNewGame();
    });
}

// Start/restart new game
function startNewGame() {
    playGame = true;
    remainingAttempts = 5;
    previousGuessesArray = [];
    randomNumber = Math.floor(Math.random() * 10) + 1;

    document.getElementById("container").style.display = "block";
    startGameElement.style.display = "none";
    formElement.style.display = "block";
    remainingGuessesElement.style.display = "block";

    document.getElementById("user-input").value = "";
    remainingAttemptsElement.innerHTML = remainingAttempts;
    previousGuessesElement.innerHTML = `Previous Guesses: `;
}