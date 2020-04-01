import compareNumbers from './compareNumbers.js';

const submitButton = document.getElementById('myButton');

const triesSpan = document.getElementById('tries-span');
const tooHighLow = document.getElementById('too-high-or-too-low');
const winOrlose = document.getElementById('you-win-some-you-lose-some');
const correctNumber = Math.ceil(Math.random() * 12);

let triesDisplay = 3;



submitButton.addEventListener('click', () => {
    const userGuess = document.getElementById('user-guess').value;
    const userNumber = Number(userGuess);
    console.log(typeof userNumber);

    const result = compareNumbers(userGuess, correctNumber) 
    triesDisplay--; 
    if (result === -1) {
        triesSpan.textContent=('Too low!');
        triesDisplay--;
    } else if (result === 1) {
        triesSpan.textContent=('Too high!');
        triesDisplay--;
    } else {
        triesSpan.textContent=('You won!');
    }


});
