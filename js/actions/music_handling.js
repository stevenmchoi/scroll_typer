const path = require('path');
import { Howl, Howler } from 'howler';

export const sample_song = new Howl({
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
});
