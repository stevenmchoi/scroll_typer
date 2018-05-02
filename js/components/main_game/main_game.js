import removeAllListeners from "../../actions/remove_all_listeners";
import startSong from "./start_song";

function inSongButton([start_x, start_y, start_len, start_height], event) {
	const x_coord = event.offsetX;
	const y_coord = event.offsetY;

	return (
		x_coord > start_x &&
		x_coord < start_x + start_len &&
		y_coord > start_y &&
		y_coord < start_y + start_height
	);
}

export default function mainGame(start_dimens) {
	removeAllListeners();

	ctx.font = "50px Roboto Mono";
	ctx.fillText("Future Retro", 420.5, 380.5);

	document.body.style.cursor = "default";

	canvas.addEventListener("mousemove", event => {
		if (inSongButton(start_dimens, event)) {
			document.body.style.cursor = "pointer";
		} else {
			document.body.style.cursor = "default";
		}
	});

	canvas.addEventListener("click", event => {
		if (inSongButton(start_dimens, event)) {
			startSong();
		}
	});
}
