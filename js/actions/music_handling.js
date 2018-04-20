const path = require('path');
import { Howl, Howler } from 'howler';

export const sampleSong = new Howl({
	src: [
		path.resolve(
			__dirname,
			'app',
			'assets',
			'songs',
			'Animusic',
			'01_Future_Retro.mp3'
		),
	],
	volume: 0.01,
	// onend: display score, cancel clicking, and allow only to go back
});
