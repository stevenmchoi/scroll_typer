// import { keyboard } from "../keyboard";
import renderTextField from "../../text_field/render_text_field";
import backButton from "../../buttons/back_button";
import renderButton from '../../buttons/render_button';
import removeAllListeners from "../../../actions/remove_all_listeners";
// import handleBeats from "../../../actions/beat_handling";

export default function startSong() {
	removeAllListeners();

	// Render back button
	renderButton([-0.5, -0.5, 170, 100], ["Back", 25, 70], backButton);

	song1.play();

	// keyboard();

	renderTextField();

	// Render timer
	setInterval(() => {
		console.log("song1.currentTime: " + song1.currentTime);
		console.log("song1.duration: " + song1.duration);
	}, 1000);

	// handleBeats();
}
