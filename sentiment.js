var sentiment = require('sentiment');
var fs = require('fs');
var midiFile = require('jsmidgen');

var file = new midiFile.File();
var track = new midiFile.Track();
file.addTrack(track);


//var notes = require('books/notes-from-underground.txt');

var score = [];
var music = []; 
//var text = "I am a sick man. I am a spiteful man. I am an unattractive man."

var text = "Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, 'and what is the use of a book,' thought Alice 'without pictures or conversations?'"
var textArray = text.split(',');
console.log(textArray);


for (i =0; i < textArray.length; i++) {
	var blah = ''
	score[i] = sentiment(textArray[i]).score;
	if (score[i] % 7 == 0) {
		blah += 'c';
	} else if (score[i] % 7 == 1 || score[i] % 7 == -1) {
		blah += 'd';
	} else if (score[i] % 7 == 2 || score[i] % 7 == -2) {
		blah += 'e';
	} else if (score[i] % 7 == 3 || score[i] % 7 == -3) {
		blah += 'f';
	} else if (score[i] % 7 == 4 || score[i] % 7 == -4) {
		blah += 'g';
	} else if (score[i] % 7 == 5 || score[i] % 7 == -5) {
		blah += 'a';
	} else if (score[i] % 7 == 6 || score[i] % 7 == -6) {
		blah += 'b'
	} else {
		console.log('wut');
	}

	if (score[i] < -25) {
		blah += 0;
	} else if (score[i] < -20) {
		blah += 1;
	} else if (score[i] < -15) {
		blah += 2;
	} else if (score[i] < -10) {
		blah += 3;
	} else if (score[i] < -5) {
		blah += 4;
	} else if (score[i] < 0) {
		blah += 5;
	} else if (score[i] < 5) {
		blah += 6;
	} else if (score[i] < 10) {
		blah += 7;
	} else if (score[i] < 15) {
		blah += 8;
	} else if (score[i] < 20) {
		blah += 9;
	} else {
		blah += 10;
	}

	music.push(blah);
}

console.log(score);
console.log(blah);
console.log(music);

for (var j = 0; j < music.length; j++ ) {
	track.addNote(0, music[j], 64);
};

fs.writeFileSync('test.mid', file.toBytes(), 'binary');

