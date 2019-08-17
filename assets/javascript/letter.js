letter = process.argv[2];
//generated letter space//
var letterSpaceFull = "";
//console.log(letterSpaceFull);

var letterSpaceEmpty = `
_
`;
//console.log(letterSpaceEmpty);

//letter construtor//
function Letter(letter, guessedLetterBoolean) {
    this.letter = letter;
    this.guessedLetterBoolean = true;

    this.printLetter = function () {
        if (letter === guessedLetterBoolean) {
            console.log(letterSpaceEmpty);
        } else {
            console.log(letterSpaceFull = letter);

        };
    };
    this.checkLetter = function () {
        if (letter !== guessedLetterBoolean) {
            letterSpaceEmpty = letter;
            console.log(letterSpaceEmpty)
        }
    }


};

var typedLetter = new Letter(letter);
console.log(typedLetter.printLetter(letter));


//export to word.js//
module.exports = typedLetter;
