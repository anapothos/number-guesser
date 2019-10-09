import { compareNumbers } from './compare-numbers.js';

//iniliaze dom elements

const numberOfTriesRemaining = document.getElementById ('tries-remaining');
const userInput = document.getElementById ('guess-input-field');
const guessButton = document.getElementById ('guessbutton');
const userResults = document.getElementById ('win-lose');
const previousGuessField = document.getElementById ('results');

//set initial state
const correctNumber = Math.floor(4); 
let numberOfTries = 4;

userResults.textContent = `Tries Remaining: ${numberOfTries}`;

guessButton.addEventListener ('click', () => {
    let userGuess = Number(userInput.value);
    updatePreviousGuess(userGuess);
    let comparisonResult = compareNumbers(userGuess, correctNumber);
    guessingGame(comparisonResult);
});

const updatePreviousGuess = userGuess => {
    previousGuessField.textContent = `Your guess was ${userGuess}`;
};

const guessingGame = comparisonResult => {
    if (comparisonResult < correctNumber) {
        updateLives();
        updateTooLow();
    } else if (comparisonResult > correctNumber) {
        updateLives(); 
        updateTooHigh();
    } else if (comparisonResult === correctNumber) {
        winner();
    
    } else if (numberOfTries === 0) {
        loser();
    }
};

const updateLives = () => {
    numberOfTries;
    previousGuessField.textContent = `Guesses Remaining: ${numberOfTriesRemaining}`;
}; 

const updateTooLow = () => {
    previousGuessField.textContent = 'Guess was 2 low';
};

const updateTooHigh = () => {
    userResults.textContent = 'Guess was 2 high';
};

const loser = () => { 
    userResults.textContent = 'All 4 lives gone! You lose!';
};

const winner = () => {
    userResults.textContent = 'You Win!';
};