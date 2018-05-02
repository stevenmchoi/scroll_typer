const path = require("path");
import { Howl, Howler } from "howler";

// export const song1 = new Howl({
// 	src: [
// 		path.resolve(
// 			__dirname,
// 			"assets",
// 			"songs",
// 			"Animusic",
// 			"01_Future_Retro.mp3"
// 		),
// 	],
// 	volume: 0.1,
// 	// onend: display score, cancel clicking, and allow only to go back
// });

export const song1 = new Howl({
	src: ["assets/songs/Animusic/01_Future_Retro.mp3"],
	volume: 0.1,
	// onend: display score, cancel clicking, and allow only to go back
});
