var incomingLetter = require('./letter.js');

var word = "";
console.log(word);

var listOfMovies = ["toy story", "alladin", "the little mermaid", "boss baby", "shrek", "moana", "zootopia", "the lego movie", "coco", "finding nemo", "how to train a dragon", "frozen", "up", "the incredibles", "the lion king", "bambi", "dumbo"];

var listOfMoviesLength = listOfMovies.length;

listOfMovies.forEach(function (movie) {
    var movie = Math.floor(Math.random() * listOfMoviesLength);
    word = movie;
});


function CurrentWord(letter) {
    this.word = word;
};


var wordObject = new CurrentWord(word);

var wordObject = {

}