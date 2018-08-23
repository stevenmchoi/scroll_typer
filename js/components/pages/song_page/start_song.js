import setupWordField from "../../word_field/setup_word_field";
import backButton from "../../buttons/back_button";
import renderButton from "../../buttons/render_button";
import resetScreen from "../../../actions/reset_screen";
import songTimer from "../../timers/song_timer"; // import { keyboard } from "../keyboard";
// import songPage from "./song_page";

export default function startSong() {
	resetScreen();

	// Render back button
	renderButton([-0.5, -0.5, 170, 100], ["Back", 25, 70], backButton);
	// Add "left keypress" back
	window.listeners.backButtonKeyupListener = event => {
		if (event.key === "ArrowLeft") {
			backButton();
		}
	};
	document.addEventListener("keyup", window.listeners.backButtonKeyupListener);

	window.currentSong.play();

	setupWordField();

	// Render timer
	songTimer();

	// keyboard();
}
