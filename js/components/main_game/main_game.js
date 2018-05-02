import renderTextField from "../text_field/text_field";
import { keyboard } from "../keyboard";
import backButton from "./back_button";
import removeAllListeners from "../../actions/remove_all_listeners";
import handleBeats from "../../actions/beat_handling";

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
		// https://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
		if (inSongButton(start_dimens, event)) {
			const song1 = document.getElementById("song1");
			song1.volume = 0.3;

			ctx.clearRect(0, 0, canvas.width, canvas.height);
			removeAllListeners();

			ctx.font = "50px Roboto Mono";
			ctx.fillText("Back", 25, 70);
			ctx.strokeStyle = "black";
			ctx.strokeRect(-0.5, -0.5, 170, 100);
			canvas.addEventListener("click", backButton);

			song1.play();

			keyboard();

			renderTextField();

			handleBeats();
		}
	});
}
