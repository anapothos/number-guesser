import { compareNumbers } from './compare-numbers.js';

//iniliaze dom elements

const numberOfTriesRemaining = document.getElementById ('tries-remaining');
const userInput = document.getElementById ('guess-input-field');
const guessButton = document.getElementById ('guessbutton');
const userResults = document.getElementById ('win-lose');
const previousGuessField = document.getElementById ('results');

//set initial state
const correctNumber = Math.floor(11); 
let numberOfTries = 4;

numberOfTriesRemaining.textContent = `Tries Remaining: ${numberOfTries}`;

guessButton.addEventListener ('click', () => {
    let guess = Number(userInput.value);
    updatePreviousGuess(guess);
    let comparisonResult = compareNumbers(guess, correctNumber);
    guessingGame(comparisonResult);
});

const updatePreviousGuess = guess => {
    previousGuessField.textContent = `You Guessed: ${guess}`;
};

const guessingGame = comparisonResult => {
    if (comparisonResult < 1) {
        updateLives();
        updateTooLow();
    } else if (comparisonResult > -1) {
        updateLives(); 
        updateTooHigh();
    } else if (comparisonResult === 0) {
        winner();
    
    } else if (numberOfTries === 0) {
        loser();
    }
};

const updateLives = () => {
    numberOfTries--;
    previousGuessField.textContent = numberOfTries;
};

const updateTooLow = () => {
    previousGuessField.textContent = 'Guess was 2 low';
};

const updateTooHigh = () => {
    previousGuessField.textContent = 'Guess was 2 high';
};

const loser = () => { 
    userResults.textContent = 'All 4 lives gone! You lose!';
};

const winner = () => {
    userResults.textContent = 'You Win!';
};