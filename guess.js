const prompt = require('prompt-sync') ({signit: true});

let endPlay = false;

while (!endPlay) {
    const computerGuess = Math.floor(Math.random() * 10) + 1;
    let playerGuess = prompt("Guess a number between 1 and 10: ");

    if (computerGuess !== Number(playerGuess)) {
        console.log(`Computer guessed ${computerGuess}, Player guessed ${playerGuess}`);
        console.log("You have lost!");
        // playerGuess = prompt("Guess a number between 1 and 10: ");
        endPlay = false
    } else if (computerGuess ===  Number(playerGuess)) {
        console.log(`Computer guessed ${computerGuess}, Player guessed ${playerGuess}`);
        console.log("You have won!");
        endPlay = true;
    }
    
}
