import compareNumbers from './compareNumbers.js'

const submitButton = document.getElementById('myButton');
const result = document.getElementById('guess-result');
const triesDisplay = document.getElementById('tries-display');
const tooHighLow = document.getElementById('too-high-or-too-low');
const winOrlose = document.getElementById('you-win-some-you-lose-some');

let correctNumber = Math.ceil(Math.random() * 12);
let triesDisplay = 3;


submitButton.addEventListener('click', () => {
    compareNumbers(guess, correctNumber) 
    triesDisplay--;
    
    
}
);
