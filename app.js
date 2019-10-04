import { compareNumbers } from './test/compare-numbers.js';

const getRandomNumber = () => {
    return Math.ceil(Math.random() * 20);
}
//iniliaze dom elements

const goButton = document.getElementById ('button');
let numberOfTriesDisplay = document.getElementById('tries');
const highLow = document.getElementById ('level')
const successLevel = document.getElementById ('success')

const targetNumber = getRandomNumber(); 
//Initialize State
let numberOfTries = 4;
numberOfTriesDisplay.textContent = numberOfTries;

goButton.addEventListener ('click', () => {
    
    
    numberOfTriesDisplay.textContent = numberOfTries;
    //successLevel =
    
});

