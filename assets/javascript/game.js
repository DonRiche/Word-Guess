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
