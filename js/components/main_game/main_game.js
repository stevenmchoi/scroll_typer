import removeAllListeners from "../../actions/remove_all_listeners";
import renderButton from "../buttons/render_button";
import startSong from "./start_song";

export default function mainGame() {
	removeAllListeners();

	// Render start button
	renderButton(
		[400.5, 300.5, 400, 125], ["Future Retro", 420.5, 380.5], startSong
	);

	// User score


	document.body.style.cursor = "default";
}
