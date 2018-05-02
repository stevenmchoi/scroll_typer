import removeAllListeners from "../../actions/remove_all_listeners";
import startSong from "./start_song";
import inButtonListener from "../../actions/in_button_listener";

export default function mainGame() {
	removeAllListeners();

	// Render start button
	const start_dimens = [400.5, 300.5, 400, 125];
	ctx.strokeStyle = "black";
	ctx.strokeRect(...start_dimens);
	ctx.fillStyle = "#000";
	ctx.fill();

	// Render start button text
	ctx.font = "50px Roboto Mono";
	ctx.fillText("Future Retro", 420.5, 380.5);

	document.body.style.cursor = "default";

	inButtonListener(start_dimens, event, startSong);
}
