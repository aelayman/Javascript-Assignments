// imports
var input = require('readline-sync');


// constants
var maxNumberForGame = 100


// functions below here:
function printHaiku() {
    console.log("I love JavaScript");
    console.log("It is very hard but fun");
    console.log("Closures are the best\n");
}

function getRandom() {
    return Math.floor(Math.random() * maxNumberForGame) + 1;
}

function playGame() {
    console.log("I'm thinking of a number between 1 and " + maxNumberForGame + "...");
    var computerNumber = getRandom();
    //  console.log("hint " + computerNumber +" is the computer number"); 
    var guess = 0;
    var numberOfGuesses = 0;
    while (guess != computerNumber) {
        guess = parseInt(input.question("Your guess? "));
        if (computerNumber < guess) {
            console.log("It's lower.");
        } else if (computerNumber > guess) {
            console.log("It's higher.");
        }
        numberOfGuesses += 1;
    }
    if (numberOfGuesses == 1) {
        console.log("You got it right in 1 guess!");
    } else {
        console.log("You got it right in " + numberOfGuesses + " guesses!");
    }
    return numberOfGuesses;
    
}

function printStats(totalGames, totalGuesses, bestGame) {
    console.log("Overall results:");
    console.log("Total games   = " + totalGames);
    console.log("Total guesses = " + totalGuesses);
    var averageGuesses = totalGuesses / totalGames;
    var roundedAverage = Math.round(averageGuesses * 10) / 10;
    console.log("Guesses/game  = " + roundedAverage);
    console.log("Best game     = " + bestGame);
}



// main program below here
printHaiku();

// play games until player wants to stop
var repeatResponse = "Yes";
var numberOfGames = 0;
var totalNumberOfGuesses = 0;
var minNumberGuesses = 9999;
while (repeatResponse.startsWith("Y")) {
    var numGuesses = playGame();
    totalNumberOfGuesses += numGuesses;
    repeatResponse = input.question("Do you want to play again? ");
    repeatResponse = repeatResponse.toUpperCase();
    console.log("");
    numberOfGames += 1;
    if (numGuesses < minNumberGuesses) {
        minNumberGuesses = numGuesses;
    }
}

printStats(numberOfGames, totalNumberOfGuesses, minNumberGuesses);


