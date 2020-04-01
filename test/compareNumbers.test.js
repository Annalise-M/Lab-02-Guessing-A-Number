// IMPORT MODULES under test here:
// import example from '../src/example.js';
import compareNumbers from '../compareNumbers.js';
const test = QUnit.test;

test('returns -1 if guess too low', function(assert) {
    //Arrange
    // Set up your parameters and expectations
const guess = 2
const correctNumber = 4
const expected = -1
    //Act 
    // Call the function you're testing and set the result to a const
const  result = compareNumbers(guess, correctNumber)
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('returns guess - for win', function(assert) {
    //Arrange
    // Set up your parameters and expectations
const guess = 4
const correctNumber = 4
const expected = 0
    //Act 
    // Call the function you're testing and set the result to a const
const  result = compareNumbers(guess, correctNumber)
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('returns +1 guess too high', function(assert) {
    //Arrange
    // Set up your parameters and expectations
const guess = 12
const correctNumber = 4
const expected = 1
    //Act 
    // Call the function you're testing and set the result to a const
const  result = compareNumbers(guess, correctNumber)
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});