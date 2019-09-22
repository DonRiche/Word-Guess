//variables 
var listOfMovies = ["toy story", "alladin", "the little mermaid", "boss baby", "shrek", "moana", "zootopia", "the lego movie", "coco", "finding nemo", "how to train a dragon", "frozen", "up", "the incredibles", "the lion king", "bambi", "dumbo"];
var selectedMovie = "";
var guessedLetters = [];
var lettersInMovie = [];
var numEmpty = 0;
var answer = [];
var wins = 0;
var guesses = 12;

//Start the game function. 
function startGame() {

    selectedMovie = listOfMovies[Math.floor(Math.random() * listOfMovies.length)];
    lettersInMovie = selectedMovie.split("");
    numEmpty = lettersInMovie.length;

    answer = [];
    guesses = 12;
    guessedLetters = [];

    for (var i = 0; i < numEmpty; i++) {
        answer.push("_");
    }

    document.getElementById("score").innerHTML = wins;
    document.getElementById("current-word-blanks").innerHTML = answer.join(" ");
    document.getElementById("guesses").innerHTML = guesses;
    document.getElementById("guessed-letters-list").innerHTML = guessedLetters;
}

//Function checks the letters from the user to letters in the answer
function checkLetters(input) {
    var isLetterInWord = false;
    for (var i = 0; i < numEmpty; i++) {
        if (lettersInMovie.indexOf(input) > -1) {
            isLetterInWord = true;
        }
    }
    if (isLetterInWord) {
        for (var i = 0; i < numEmpty; i++) {
            if (lettersInMovie[i] == input) {
                answer[i] = input;

            }
        }
    }
    else {
        guesses--;
        guessedLetters.push(input);
        document.getElementById("guesses").innerHTML = guesses;
        document.getElementById("guessed-letters-list").innerHTML = guessedLetters;
    }
}

//Function that ends the game.
function endGame() {
    document.getElementById("current-word-blanks").innerHTML = answer.join(" ");

    if (lettersInMovie.toString() == answer.toString()) {
        wins++;
        document.getElementById("score").innerHTML = wins;
        startGame();
    }
    else if (guesses == 0) {
        alert("You Lost!");
        startGame();
    }
}

//Function that starts game
startGame();

// Event listener
document.onkeyup = function (event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(userGuess);
    endGame();
}