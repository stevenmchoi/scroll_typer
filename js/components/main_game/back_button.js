// import { song1 } from "../../actions/song_handling";
import root from "../root";
import removeAllListeners from "../../actions/remove_all_listeners";

export default function backButton() {
	const song1 = document.getElementById("song1");

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	removeAllListeners();

	song1.pause();
	song1.currentTime = 0;

	root();
}
