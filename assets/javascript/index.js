var fs = require('fs');
var word = require('./word.js');


fs.appendFile('wordGuess.txt', md.trim(), function (err) {
    console.log('loaded');
});