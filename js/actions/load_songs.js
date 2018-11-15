export default function loadSongs() {
	// TODO: Use promise chain to handle missing songs
	// https://www.youtube.com/playlist?list=PLRqwX-V7Uu6bKLPQvPRNNE65kBL62mVfx

	return new Promise((resolve, reject) => {
		window.allSongs = [song1, song2, song3];

		if (window.allSongs) {
			resolve();
		} else {
			reject(new Error("Can't find songs to play"));
		}
	});
}
