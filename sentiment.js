var sentiment = require('sentiment');
var datap = require('data-piano');
var baudio = require('baudio');
//var notes = require('books/notes-from-underground.txt');


var score = [];
var text = "I love feelings really happy. I hate sad things.";
textArray = text.split('.');

console.log(textArray);

for (i =0; i < textArray.length; i++) {
	score[i] = sentiment(textArray[i]).score;
}

console.log(score);


var piano = new datap({
	data: score,
	velocityData: score,
	lowKey: 60,
	highKey: 71,
	lowVelocity: 42,
	highVelocity: 80,
	stopVelocity: 80
});

var playFunc = piano.getSinPlayFunc(2);
var b = baudio(playFunc);
b.play();