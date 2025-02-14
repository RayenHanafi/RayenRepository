// script.js
let nombreSecret;
let tentativesRestantes;
let min, max;

// Get elements from the HTML
const startButton = document.getElementById('startButton');
const gameSection = document.getElementById('gameSection');
const instructions = document.getElementById('instructions');
const guessInput = document.getElementById('guessInput');
const submitGuess = document.getElementById('submitGuess');
const result = document.getElementById('result');
const attemptsLeft = document.getElementById('attemptsLeft');
const restartButton = document.getElementById('restartButton');

// Function to start the game
startButton.addEventListener('click', () => {
    const niveau = prompt("Choisissez un niveau (facile, intermediaire, difficile):").toLowerCase();
    if (niveau === 'facile' || niveau === 'intermediaire' || niveau === 'difficile') {
        startGame(niveau);
    } else {
        alert("Niveau invalide. Veuillez choisir entre facile, intermediaire ou difficile.");
    }
});

// Function to start the game based on difficulty
function startGame(niveau) {
    if (niveau === 'facile') {
        tentativesRestantes = 10;
        min = 1;
        max = 50;
    } else if (niveau === 'intermediaire') {
        tentativesRestantes = 7;
        min = 1;
        max = 100;
    } else if (niveau === 'difficile') {
        tentativesRestantes = 5;
        min = 1;
        max = 200;
    }

    nombreSecret = Math.floor(Math.random() * (max - min + 1)) + min;
    startButton.classList.add('hidden');
    gameSection.classList.remove('hidden');
    instructions.textContent = `Devinez un nombre entre ${min} et ${max}.`;
    attemptsLeft.textContent = `Tentatives restantes : ${tentativesRestantes}`;
}

// Function to check the user's guess
submitGuess.addEventListener('click', () => {
    const guess = parseInt(guessInput.value);
    if (isNaN(guess) {
        result.textContent = "Veuillez entrer un nombre valide.";
        return;
    }

    tentativesRestantes--;
    attemptsLeft.textContent = `Tentatives restantes : ${tentativesRestantes}`;

    if (guess === nombreSecret) {
        result.textContent = `Félicitations ! Vous avez trouvé le nombre secret : ${nombreSecret}.`;
        endGame();
    } else if (guess < nombreSecret) {
        result.textContent = "Le nombre secret est plus grand.";
    } else {
        result.textContent = "Le nombre secret est plus petit.";
    }

    if (tentativesRestantes === 0) {
        result.textContent = `Dommage ! Le nombre secret était ${nombreSecret}.`;
        endGame();
    }

    guessInput.value = ''; // Clear the input field
});

// Function to end the game
function endGame() {
    submitGuess.disabled = true;
    restartButton.classList.remove('hidden');
}

// Function to restart the game
restartButton.addEventListener('click', () => {
    gameSection.classList.add('hidden');
    restartButton.classList.add('hidden');
    startButton.classList.remove('hidden');
    result.textContent = '';
    attemptsLeft.textContent = '';
    submitGuess.disabled = false;
});