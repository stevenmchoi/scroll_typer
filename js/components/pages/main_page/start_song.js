import renderTextField from "../../text_field/render_text_field";
import backButton from "../../buttons/back_button";
import renderButton from '../../buttons/render_button';
import resetScreen from "../../../actions/reset_screen";
import songTimer from "../../timers/song_timer";
// import { keyboard } from "../keyboard";
// import handleBeats from "../../../actions/beat_handling";

export default function startSong() {
	resetScreen();

	// Render back button
	renderButton([-0.5, -0.5, 170, 100], ["Back", 25, 70], backButton);

	song1.play();

	renderTextField();

	// Render timer
	songTimer();

	// keyboard();

	// handleBeats();
}
