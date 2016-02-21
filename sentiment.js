var sentiment = require('sentiment');
var fs = require('fs');
var midiFile = require('jsmidgen');
var AlchemyAPI = require('alchemy-api');
var alchemy = new AlchemyAPI('c3c38a35951890872f9d5670ba6668cd368b3d7c');
var file = new midiFile.File();
var track = new midiFile.Track();

file.addTrack(track);

var score = [];
var music = []; 
var alchemyScore = [];

var text;
var textArray;

//var text = "Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, 'and what is the use of a book,' thought Alice 'without pictures or conversations?'"

fs.readFile('books/alice_scrubbed', 'utf-8', (err, data) => {
	if (err) throw err;
	textArray = data.split('.');

	for (i =0; i < 3; i++) {
		var blah = '';
		var blah2 = '';
		var blah3 = '';
	//console.log(sentiment(textArray[i]))

	score[i] = sentiment(textArray[i]).score;


	alchemy.sentiment(textArray[i], {}, function(err, response) {
		if (err) throw err;

	  // See http://www.alchemyapi.com/api/ for format of returned object
	  alchemySentiment = response.docSentiment;
	  console.log(JSON.stringify(alchemySentiment));
	  // Do something with data
	  alchemyScore.push( JSON.stringify(alchemySentiment));

	})

	if (score[i] % 7 === 0) {
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
		blah += 'b';
	} else {
		console.log('wut');
	}

	if (score[i] < -5) {
		blah2 = blah  + 4;
		blah3 = blah + 6;
		blah += 2;
	} else if (score[i] < -4) {
		blah2 = blah  + 4;
		blah3 = blah + 6;
		blah += 2;
	} else if (score[i] < -3) {
		blah2 = blah  + 4;
		blah3 = blah + 6;
		blah += 2;
	} else if (score[i] < -2) {
		blah2 = blah  + 4;
		blah3 = blah + 6;
		blah += 2;
	} else if (score[i] < -1) {
		blah2 = blah  + 4;
		blah3 = blah + 6;
		blah += 2;
	} else if (score[i] < 0) {
		blah2 = blah  + 4;
		blah3 = blah + 6;
		blah += 2;
	} else if (score[i] < 1) {
		blah2 = blah  + 4;
		blah3 = blah + 6;
		blah += 2;
	} else if (score[i] < 2) {
		blah2 = blah  + 4;
		blah3 = blah + 6;
		blah += 2;
	} else if (score[i] < 3) {
		blah2 = blah  + 4;
		blah3 = blah + 6;
		blah += 2;
	} else if (score[i] < 4) {
		blah2 = blah  + 4;
		blah3 = blah + 6;
		blah += 2;
	} else {
		blah2 = blah  + 4;
		blah3 = blah + 6;
		blah += 2;
	}

	chord = [blah, blah2, blah3];

	music.push(chord);
}


for (var j = 0; j < music.length; j++ ) {
	track.instrument(0, 0x13);
	track.note(0, music[j][0], 64);
	track.noteOn(0, music[j][1]);
	track.noteOn(0, music[j][2]);
}

fs.writeFileSync('test.mid', file.toBytes(), 'binary');

});

setTimeout(writeFile,3000);

function writeFile(){
	fs.writeFile('alice-test.json', alchemyScore, (err) => {
		console.log('write file function');
		if (err) throw err;
	});
}
