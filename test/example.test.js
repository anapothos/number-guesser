// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { compareNumbers } from './compare-numbers.js';
const test = QUnit.test;

test('should return 0 because numbers are equal', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 4; 
    const correctNumber = 4;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers (guess, correctNumber);


    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 0);
});
test('should return -1 because numbers is too low', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 2; 
    const correctNumber = 4;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers (guess, correctNumber);


    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, -1);
});
test('should return +1 because numbers is too high', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 19; 
    const correctNumber = 4;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers (guess, correctNumber);


    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 1);
});
