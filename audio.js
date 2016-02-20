window.onload = function () {
	console.log(MIDIjs.get_audio_status());
	MIDIjs.play('http://localhost:8000/test.mid');
};