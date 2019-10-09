export const compareNumbers = (guess, correctNumber) => {
    if (guess < 1 || guess > 20 || typeof guess !== 'number') {
        let badNumberError = new Error('You guessed a baddie! Input must be between 1 and 20.');
        console.log(badNumberError);
        return badNumberError;
    }
    if (guess < correctNumber){
        return -1;
    } else if (guess === correctNumber){
        return 0;
    } else if (guess > correctNumber){
        return 1;
    }
}; 
