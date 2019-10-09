import { compareNumbers } from './compare-numbers.js';

//iniliaze dom elements


const numberOfTriesLeft = document.getElementById ('tries-remaining');
const highOrLow = document.getElementById ('high-low');
const guessButton = document.getElementById ('guessbutton');
const userResults = document.getElementById ('win-lose');

//set initial state
const targetNumber = 4; 

goButton.addEventListener ('click', () => {
    let userGuess = Number(userInput.value);
    let comparisonResult = compareNumbers(userGuess, targetNumber);
    guessingGame(comparisonResult);
    
});


const guessingGame = comparisonResult => {
    if (comparisonResult < 0) {
        update;
    }
};