export default function loadSongs() {
	// TODO: Use promise chain to handle missing songs
	// https://www.youtube.com/playlist?list=PLRqwX-V7Uu6bKLPQvPRNNE65kBL62mVfx

	return new Promise((resolve, reject) => {
		// Bind all songs to window
		// window.currentSong = document.getElementById("song1");
		// window.currentSong = new Audio(urlString);
		// https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events

		window.currentSong = song1;

		if (window.currentSong) {
			resolve();
		} else {
			reject(new Error("Can't find song to play"));
		}

	});
}
