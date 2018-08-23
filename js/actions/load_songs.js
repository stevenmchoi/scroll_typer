import renderVolumeControl from "../components/volume/render_volume_control";

export default function loadSongs() {
	// TODO: Use promise chain to handle missing songs
	// https://www.youtube.com/playlist?list=PLRqwX-V7Uu6bKLPQvPRNNE65kBL62mVfx

	return new Promise((resolve, reject) => {
		// Bind all songs to window
		// window.song1 = document.getElementById("song1");
		// window.song1 = new Audio(urlString);
		// https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events

		if (song1) {
			resolve();
		} else {
			reject(new Error("Can't find song1"));
		}

	});
}
